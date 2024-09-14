"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getBlogById } from '@/lib/actions/blog.actions';

const ViewBlogPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const id = searchParams.get('id');
        console.log('Fetched ID:', id); 
        if (id) {
          const fetchedBlog = await getBlogById({ blogId: id });
          console.log('Fetched Blog:', fetchedBlog); 
          if (fetchedBlog) {
            setBlog(fetchedBlog);
          } else {
            setError('Blog not found');
          }
        } else {
          setError('Blog ID is missing');
        }
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>{blog.subtitle}</h2>
    </div>
  );
}

export default ViewBlogPage;
