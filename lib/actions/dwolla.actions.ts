"use server";

import { AddFundingSourceParams, createBankAccountProps, CreateFundingSourceOptions, NewDwollaCustomerParams, TransferParams } from "@/types";
import { Client } from "dwolla-v2";
import { createAdminClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

const {
    APPWRITE_DATABASE_ID: DATABASE_ID,
    APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
    APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

const getEnvironment = (): "production" | "sandbox" => {
    const environment = process.env.DWOLLA_ENV as string;
  
    switch (environment) {
      case "sandbox":
        return "sandbox";
      case "production":
        return "production";
      default:
        throw new Error(
          "Dwolla environment should either be set to `sandbox` or `production`"
        );
    }
  };

  const dwollaClient = new Client({
    environment: getEnvironment(),
    key: process.env.DWOLLA_KEY as string,
    secret: process.env.DWOLLA_SECRET as string,
  });

// Create a Dwolla Funding Source using a Plaid Processor Token
export const createFundingSource = async (
    options: CreateFundingSourceOptions
  ) => {
    try {
      return await dwollaClient
        .post(`customers/${options.customerId}/funding-sources`, {
          name: options.fundingSourceName,
          plaidToken: options.plaidToken,
        })
        .then((res) => res.headers.get("location"));
    } catch (err) {
      console.error("Creating a Funding Source Failed: ", err);
    }
  };

export const createOnDemandAuthorization = async () => {
  try {
    const onDemandAuthorization = await dwollaClient.post(
      "on-demand-authorizations"
    );
    const authLink = onDemandAuthorization.body._links;
    return authLink;
  } catch (err) {
    console.error("Creating an On Demand Authorization Failed: ", err);
  }
};

export const createDwollaCustomer = async (
    newCustomer: NewDwollaCustomerParams
  ) => {
    try {
      return await dwollaClient
        .post("customers", newCustomer)
        .then((res) => res.headers.get("location"));
    } catch (err) {
      console.error("Creating a Dwolla Customer Failed: ", err);
    }
  };

export const createTransfer = async ({
  sourceFundingSourceUrl,
  destinationFundingSourceUrl,
  amount,
}: TransferParams) => {
  try {
    const requestBody = {
      _links: {
        source: {
          href: sourceFundingSourceUrl,
        },
        destination: {
          href: destinationFundingSourceUrl,
        },
      },
      amount: {
        currency: "USD",
        value: amount,
      },
    };
    return await dwollaClient
      .post("transfers", requestBody)
      .then((res) => res.headers.get("location"));
  } catch (err) {
    console.error("Transfer fund failed: ", err);
  }
};

export const addFundingSource = async ({
  dwollaCustomerId,
  processorToken,
  bankName,
}: AddFundingSourceParams) => {
  try {
    // create dwolla auth link
    const dwollaAuthLinks = await createOnDemandAuthorization();

    // add funding source to the dwolla customer & get the funding source url
    const fundingSourceOptions = {
      customerId: dwollaCustomerId,
      fundingSourceName: bankName,
      plaidToken: processorToken,
      _links: dwollaAuthLinks,
    };
    return await createFundingSource(fundingSourceOptions);
  } catch (err) {
    console.error("Transfer fund failed: ", err);
  }
};

export const createBankAccount = async ({
    userId,
    bankId,
    accountId,
    accessToken,
    fundingSourceUrl,
    shareableId,
}:createBankAccountProps)=>{
    try {
        //! Appwrite Client that allows us to create new documents
        const { database } = await createAdminClient();

        console.log("Creating bank account with:", {
            userId,
            bankId,
            accountId,
            accessToken,
            fundingSourceUrl,
            shareableId,
          });
          
        const bankAccount = await database.createDocument(
            DATABASE_ID!,
            BANK_COLLECTION_ID!,
            ID.unique(),
            {
                userId,
                bankId,
                accountId,
                accessToken,
                fundingSourceUrl,
                shareableId,
            }
        )
        return parseStringify(bankAccount);
    } catch (error) {
        console.log("Transfer fund failed: ", error);
    }
}

