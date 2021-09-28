import { useEffect, useState } from "react";
const useConfig = () => {
  const [config, setConfig] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getConfig = () => {
    setLoading(true);
    fetch("http://localhost:3005")
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
