import { useState, useEffect } from 'react';

const useStateWithSessionStorage = (sessionStorageKey, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || defaultValue
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
export default useStateWithSessionStorage;
