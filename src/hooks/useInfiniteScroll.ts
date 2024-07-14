import { useEffect, useCallback } from 'react';

function useInfiniteScroll(loadMore: () => void) {
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    const option = {
      root: null as Element | null,
      rootMargin: '20px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, [handleObserver]);
}

export default useInfiniteScroll;
