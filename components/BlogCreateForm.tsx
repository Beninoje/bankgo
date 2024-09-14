"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBlogSchema } from '@/lib/utils';
import { CreateBlogProps } from '@/types';
import { createBlog } from '@/lib/actions/blog.actions';

const BlogCreateForm = () => {
    const [blog, setBlog] = useState(null);
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

    const onSubmit = async (data: CreateBlogProps) => {
        setIsLoading(true);

        try {
            const blogData = {
                image: data.image!,
                title: data.title!,
                subtitle: data.subtitle!,
                header_1: data.header_1!,
                paragraph_1: data.paragraph_1!,
                header_2: data.header_2!,
                paragraph_2: data.paragraph_2!,
            };
            const newBlog = await createBlog(blogData);
            setBlog(newBlog);

            router.push('blog/create');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Create a New Blog</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        {...form.register('title')}
                        placeholder="Enter blog title"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.title && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.title.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="subtitle" className="block font-medium text-gray-700">Subtitle</label>
                    <input
                        id="subtitle"
                        {...form.register('subtitle')}
                        placeholder="Enter blog subtitle"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.subtitle && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.subtitle.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="image" className="block font-medium text-gray-700">Image URL</label>
                    <input
                        id="image"
                        {...form.register('image')}
                        placeholder="Enter image URL"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.image && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.image.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="header_1" className="block font-medium text-gray-700">Header 1</label>
                    <input
                        id="header_1"
                        {...form.register('header_1')}
                        placeholder="Enter header 1"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.header_1 && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.header_1.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="paragraph_1" className="block font-medium text-gray-700">Paragraph 1</label>
                    <textarea
                        id="paragraph_1"
                        {...form.register('paragraph_1')}
                        placeholder="Enter paragraph 1"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.paragraph_1 && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.paragraph_1.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="header_2" className="block font-medium text-gray-700">Header 2</label>
                    <input
                        id="header_2"
                        {...form.register('header_2')}
                        placeholder="Enter header 2"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.header_2 && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.header_2.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="paragraph_2" className="block font-medium text-gray-700">Paragraph 2</label>
                    <textarea
                        id="paragraph_2"
                        {...form.register('paragraph_2')}
                        placeholder="Enter paragraph 2"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    />
                    {form.formState.errors.paragraph_2 && (
                        <p className="mt-2 text-sm text-red-600">{form.formState.errors.paragraph_2.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                >
                    {isLoading ? 'Creating...' : 'Create Blog'}
                </button>
            </form>
        </div>
    );
};

export default BlogCreateForm;
