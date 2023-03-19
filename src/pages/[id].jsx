import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import PostItem from '@/components/PostItem/PostItem';
import Loader from '@/components/UI/Loader/Loader';
import { useFetch } from '@/components/hooks/useFetch';

import { getPost } from '@/api/getPosts';

export default function Item() {
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

  return <>{post ? <PostItem data={post} /> : <Loader />}</>;
}
