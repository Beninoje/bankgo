"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";
import { CreateBlogProps } from "@/types";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_BLOG_COLLECTION_ID: BLOG_COLLECTION_ID,
} = process.env;

export const createBlog = async (blog: CreateBlogProps) => {
  try {
    const { database } = await createAdminClient();

    const newBlog = await database.createDocument(
      DATABASE_ID!,
      BLOG_COLLECTION_ID!,
      ID.unique(),
      {
        ...blog,
      }
    )

    return parseStringify(newBlog);
  } catch (error) {
    console.log(error);
  }
}