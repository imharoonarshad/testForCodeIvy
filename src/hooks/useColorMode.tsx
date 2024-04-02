import { useEffect, useLayoutEffect, useState } from 'react';

const useDarkMode = () => {
  const [colorMode, setColorMode] = useState('light');

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const className = 'dark';
      const bodyClass = window.document.body.classList;

      if (colorMode === 'dark') {
        bodyClass.add(className);
      } else {
        bodyClass.remove(className);
      }
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useDarkMode;
