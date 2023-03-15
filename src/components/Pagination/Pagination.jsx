import React from 'react';
import { nanoid } from 'nanoid';

import { usePagination, DOTS } from '@/components/hooks/usePagination';

import {
  List,
  ArrowItem,
  ArrowLeft,
  ArrowRight,
  DotsItem,
  NumberItem,
} from './Pagination.styled';

export default function Pagination({
  changePage,
  totalPageCount,
  siblingCount = 1,
  currentPage,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalPageCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    changePage(currentPage + 1);
  };

  const onPrevious = () => {
    changePage(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <List>
      <ArrowItem onClick={onPrevious} className={currentPage === 1 ? 'disabled' : ''}>
        <ArrowLeft className={currentPage === 1 ? 'disabled' : ''} />
      </ArrowItem>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <DotsItem key={nanoid()}>&#8230;</DotsItem>;
        }

        return (
          <NumberItem
            key={nanoid()}
            onClick={() => changePage(pageNumber)}
            className={pageNumber === currentPage ? 'selected' : ''}
          >
            {pageNumber}
          </NumberItem>
        );
      })}
      <ArrowItem onClick={onNext} className={currentPage === lastPage ? 'disabled' : ''}>
        <ArrowRight className={currentPage === lastPage ? 'disabled' : ''} />
      </ArrowItem>
    </List>
  );
}
