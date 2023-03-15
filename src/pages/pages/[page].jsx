import axios from 'axios';

import Hero from '@/components/Hero/Hero';
import PostFilter from '@/components/PostFilter/PostFilter';
import PostsList from '@/components/PostsList/PostsList';
import Pagination from '@/components/Pagination/Pagination';

export default function PageItem({ data }) {
  console.log(data);
  return (
    <>
      <Hero />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortedAndSearchedPosts} />
      <Pagination totalPages={totalPages} changePage={changePage} page={currentPage} />
    </>
  );
}

export async function getStaticPaths(qwe) {
  console.log('qwe', qwe);
  const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character?page=1',
  });

  const { data } = await instance.get();

  // const paths = data.results.map(item => ({
  //   params: { page: data.info.next },
  // }));

  return {
    // paths,
    paths: [{ params: { page: '2' } }],
    // paths: [
    //   // return the paths needed here, this is just an example
    //   { params: { category: 'books', page: '1' } },
    //   { params: { category: 'books', page: '2' } },
    //   { params: { category: 'books', page: '3' } },
    // ],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  console.log('params', params);
  const instance = axios.create({
    baseURL: `https://rickandmortyapi.com/api/character?page=${params.page}`,
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
    // props: {
    //   posts: data.results,
    //   currentPage: params.page,
    //   totalPages: data.info.pages,
    // },
  };
}
