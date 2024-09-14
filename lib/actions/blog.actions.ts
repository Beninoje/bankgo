"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { CreateBlogProps, getBlogByIdProps } from "@/types";

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
export async function getBlogs() {
  try {
    const { database } = await createAdminClient();
    const blogs = await database.listDocuments(
      DATABASE_ID!,
      BLOG_COLLECTION_ID!,
      [Query.limit(10)]
    );
    return parseStringify(blogs.documents)

  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs");
  }
}
export const getBlogById = async ({ blogId }: getBlogByIdProps) => {
  try {
    const { database } = await createAdminClient();

    const blog = await database.listDocuments(
      DATABASE_ID!,
      BLOG_COLLECTION_ID!,
      [Query.equal('$id', blogId)] 
    );

    if (blog.total === 1) {
      return parseStringify(blog.documents[0]);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};
