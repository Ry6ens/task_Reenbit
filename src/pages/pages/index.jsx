import { useState } from 'react';
import axios from 'axios';

import Hero from '@/components/Hero/Hero';
import PostFilter from '@/components/PostFilter/PostFilter';
import PostsList from '@/components/PostsList/PostsList';
import Pagination from '@/components/Pagination/Pagination';

import { usePosts } from '@/components/hooks/usePosts';

export default function Pages({ data }) {
  const [filter, setFilter] = useState({ sort: 'name', query: '' });
  const [totalPages, setTotalPages] = useState(data.info.pages);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const sortedAndSearchedPosts = usePosts(data.results, filter.sort, filter.query);

  function changePage(page) {
    setCurrentPage(page);
    // fetchPosts(limit, page);
  }

  return (
    <>
      <Hero />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortedAndSearchedPosts} />
      <Pagination totalPages={totalPages} changePage={changePage} page={currentPage} />
    </>
  );
}

export async function getStaticProps() {
  const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character?page=1',
  });

  const { data } = await instance.get();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
