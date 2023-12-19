import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    if (value !== '') {
      const id = setTimeout(() => {
        console.log('setting new timeout...');
        setDebouncedValue(value);
        return () => {
          console.log('clearing timeout...');
          clearTimeout(id);
        };
      }, delay);
    }
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
