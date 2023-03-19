import Head from 'next/head';
import { useState, useEffect } from 'react';

import Hero from '@/components/Hero/Hero';
import PostFilter from '@/components/PostFilter/PostFilter';
import PostsList from '@/components/PostsList/PostsList';
import Pagination from '@/components/Pagination/Pagination';
import Loader from '@/components/UI/Loader/Loader';

import { useSortedPosts } from '@/components/hooks/usePosts';
import { useFetch } from '@/components/hooks/useFetch';
import { useLocalStorage } from '@/components/hooks/useLocalStorage';

import { getPosts } from '@/api/getPosts';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [setUID, getUID, setPage, getPage, setQuery, getQuery] = useLocalStorage();

  const [filter, setFilter] = useState({ sort: 'name', query: getQuery() });

  const sortedPosts = useSortedPosts(posts, filter.sort);

  const [fetchPosts, postsIsLoading, postsError] = useFetch(async (page, query) => {
    const { data } = await getPosts(page, query);

    setPosts(data.results);
    setTotalPages(data.info.pages);
  });

  useEffect(() => {
    setQuery(filter.query);

    if (filter.query.length) {
      fetchPosts(getPage(), getQuery());
      setPage(1);

      return;
    }

    getUID() ? fetchPosts(getPage(), getQuery()) : '';

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.query]);

  function changePage(page) {
    if (filter.query.length) {
      setPage(page);
      fetchPosts(page, filter.query);
      return;
    }

    setPage(page);
    fetchPosts(page);
  }

  return (
    <>
      <Head>
        <title>Rick & Morty</title>
        <meta name="description" content="Rick & Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <PostFilter filter={filter} setFilter={setFilter} />

        {postsError && (
          <h2 style={{ marginTop: '32px', textAlign: 'center' }}>{postsError}</h2>
        )}

        {postsIsLoading ? <Loader /> : <PostsList posts={sortedPosts} />}

        <Pagination
          currentPage={getPage()}
          totalPageCount={totalPages}
          changePage={changePage}
        />
      </main>
    </>
  );
}
