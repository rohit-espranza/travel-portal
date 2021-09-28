import { useEffect, useState } from "react";
import { CONFIG_URL } from "../constants";
const useConfig = () => {
  const [config, setConfig] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getConfig = () => {
    setLoading(true);
    fetch(CONFIG_URL)
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    if (config === undefined) getConfig();
  }, [config]);

  return { config, loading, error };
};
export default useConfig;
