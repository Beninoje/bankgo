'use server';

import { LoginUser, signInProps, SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password} : signInProps) => {
    try { 
      const { account } = await createAdminClient();

      const response = await account.createEmailPasswordSession(email,password);

      cookies().set("appwrite-session", response.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });

      return parseStringify(response);
    } catch (error) {
        console.error('Error: ', error)
    }
}
export const signUp = async (userData: SignUpParams) => {
  const {email, password, firstName, lastName} = userData; 
  
  try {
      const { account } = await createAdminClient();

      const newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`
      );
      const session = await account.createEmailPasswordSession(email, password);
    
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });

      return parseStringify(newUserAccount);
    } catch (error) {
        console.error('Error: ',error)
    }
}
// ... your initilization functions
export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return console.log(error);
  }
}

export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient();

    // Delete the session from the server
    await account.deleteSession('current');

    // Clear the cookie
    cookies().delete('appwrite-session');
    
    // Optionally, redirect to login page or show a logged-out state
  } catch (error) {
    console.error('Error logging out:', error);
    return null;
  }
};


