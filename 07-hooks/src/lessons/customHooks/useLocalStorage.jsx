import { useEffect, useState } from "react";

export default function useLocalStorage(initState, key) {
  const get = () => {
    const storage = localStorage.getItem(key);
    return storage ? +storage : initState;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}
