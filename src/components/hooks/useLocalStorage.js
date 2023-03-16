export const useLocalStorage = () => {
  const setPage = currentPage => {
    window.localStorage.setItem('currentPage', currentPage);
  };

  const getPage = () => {
    if (typeof window !== 'undefined') {
      const page = JSON.parse(window.localStorage.getItem('currentPage'));
      return page ? page : 1;
    }
  };

  const setQuery = name => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('query', name);
    }
  };

  const getQuery = () => {
    if (typeof window !== 'undefined') {
      const query = window.localStorage.getItem('query');
      return query ? query : '';
    }
  };

  const setUID = uid => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('uid', uid);
    }
  };

  const getUID = () => {
    if (typeof window !== 'undefined') {
      const uid = window.localStorage.getItem('uid');
      return uid ? uid : '';
    }
  };

  return [setPage, getPage, setQuery, getQuery, setUID, getUID];
};
