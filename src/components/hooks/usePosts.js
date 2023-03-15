import { useMemo } from 'react';

import { getPostsByName } from '@/api/getPosts';

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

// export const usePosts = (posts, sort, query) => {
//   const sortedPosts = useSortedPosts(posts, sort);

//   const searchAndSortedPosts = useMemo(() => {
//     return sortedPosts.filter(posts =>
//       posts.name.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query, sortedPosts]);
//   return searchAndSortedPosts;
// };

// export const usePosts =  (posts, sort, query) => {
//   // const qwe = await getPostsByName(query);
//   // console.log(qwe);

//   const sortedPosts = useSortedPosts(posts, sort);

//   const searchAndSortedPosts = useMemo(() => {
//     return sortedPosts.filter(posts =>
//       posts.name.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [query, sortedPosts]);
//   return searchAndSortedPosts;
// };
