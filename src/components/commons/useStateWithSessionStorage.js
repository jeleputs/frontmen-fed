import { useState, useEffect } from 'react';

const useStateWithSessionStorage = sessionStorageKey => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || ''
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
export default useStateWithSessionStorage;
