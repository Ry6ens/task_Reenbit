import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PostItem from '@/components/PostItem/PostItem';
import { useFetch } from '@/components/hooks/useFetch';

import { getPost } from '@/api/getPosts';

export default function Item({ findItem }) {
  const router = useRouter();
  const [post, setPost] = useState(null);

  const postId = router.query.id;

  const [fetchPosts, postsIsLoading, postsError] = useFetch(async postId => {
    const { data } = await getPost(postId);

    setPost(data);
  });

  useEffect(() => {
    fetchPosts(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  if (!post) {
    return;
  }

  return (
    <>
      <PostItem data={post} />
    </>
  );
}
