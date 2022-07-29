import { useState } from "react";
import { IWeather } from "../interfaces";

const useFetch = (callback:any) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData:any = async (params:any) => {
    try {
      setIsLoading(true);
      await callback(params);
    } catch (e:any) {
      setIsLoading(false);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return [error, isLoading, fetchData];
};
export default useFetch;
