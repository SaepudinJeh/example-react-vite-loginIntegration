import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_BASE_URL;
const header = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export default function useFetch({
  url,
  startFetching = false,
  payload = null,
  method = "POST",
}) {
  const [response, setResponse] = useState({
    statusCode: null,
    result: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    if (startFetching) {
      const fetchData = async () => {
        console.log("startFetching....");
        try {
          setLoading(true);
          const result = await axios.request({
            url,
            method,
            headers: { ...header },
            data: payload,
          });

          console.log("Fetch Data", result);

          setResponse({
            statusCode: result.status,
            result: result.data,
          });
        } catch (error) {
          setLoading(false);
          console.log("Error fetch", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startFetching]);

  return { error, response, loading };
}
