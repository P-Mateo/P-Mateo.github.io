import { useEffect, useState } from 'react';

export const useScrollSpy = (ids: string[], offset = 120) => {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const current = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) {
            return { id, top: Number.POSITIVE_INFINITY };
          }

          return { id, top: Math.abs(element.getBoundingClientRect().top - offset) };
        })
        .sort((a, b) => a.top - b.top)[0];

      if (current) {
        setActiveId(current.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
};
