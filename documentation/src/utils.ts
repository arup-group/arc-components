import useIsBrowser from '@docusaurus/useIsBrowser';
import { useEffect, useState } from 'react';

export function breakpoint(breakpoint: number): boolean {
  const isBrowser = useIsBrowser();
  if (!isBrowser) return false;

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= breakpoint;
}
