import { useState } from 'react';

function usePagination(total, paginateCount) {
  const [ page, setPage ] = useState(1);
  const [ perPage, setPerPage ] = useState({ value: 30, label: 30 });
  const totalPages = Math.ceil(total / perPage.value);
  const middlePage = Math.ceil(paginateCount / 9);
  const onPerpageChange = (option) => {
    setPerPage(option);
    setPage(1);
  };

  // eslint-disable-next-line consistent-return
  const onPageChange = (eventName, b) => {
    if (eventName === 'current') {
      return setPage(b);
    }
    if (eventName === 'up') {
      if (page < totalPages) {
        return setPage(prev => prev + 1);
      }
    }
    if (eventName === 'down') {
      if (page > 1) {
        return setPage(prev => prev - 1);
      }
    }
  };
  return {
    page,
    perPage,
    middlePage,
    totalPages,
    onPerpageChange,
    onPageChange,
    setPage,
  };
}

export default usePagination;
