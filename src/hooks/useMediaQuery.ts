import React, { useState, useEffect } from 'react';
import { breakpoints } from '../theme';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", () => {
      listener();
    });

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export const useIsMobile = () => {
  return useMediaQuery(`${'(max-width: ' + breakpoints.sm + 'px)'}`);
}