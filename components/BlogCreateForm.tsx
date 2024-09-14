"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { createBlogSchema } from '@/lib/utils';
import { useState } from 'react';
import { CreateBlogProps } from '@/types';
import { createBlog } from '@/lib/actions/blog.actions';
import { useRouter } from 'next/navigation';


const BlogCreateForm = () => {
    const [blog,setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const form = useForm<CreateBlogProps>({
        resolver: zodResolver(createBlogSchema),
        defaultValues: {
            title: "",
            subtitle: "",
            image: "",
            header_1: "",
            paragraph_1: "",
            header_2: "",
            paragraph_2: "",
        },
    });
    
    // 2. Define a submit handler.
    const onSubmit = async (data: CreateBlogProps) =>{
        setIsLoading(true);

        console.log(data);
        try {
            const blogData = {
                image: data.image!,
                title: data.title!,
                subtitle: data.subtitle!,
                header_1:data.header_1!,
                paragraph_1:data.paragraph_1!,
                header_2:data.header_2!,
                paragraph_2:data.paragraph_2!,
            }
            const newBlog = await createBlog(blogData);
            setBlog(newBlog);

            router.push('/create');
            
        } catch (error) {
           console.log(error); 
        }finally{
            setIsLoading(false);
        }
        
    }
  return (
    <div>BlogCreateForm</div>
  )
}

export default BlogCreateForm