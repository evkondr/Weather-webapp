import { useState } from "react";
import axios, { AxiosError } from "axios";
import { IWeather, errData } from "../interfaces";

const useFetch = (callback:(params?:any)=>void) => {
  const [error, setError] = useState<null | AxiosError | Error | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData:any = async (params:any) => {
    try {
      setIsLoading(true);
      await callback(params);
    } catch (err:any) {
      setIsLoading(false);
      if (axios.isAxiosError(err) && err.response) {
        const { data } = err.response as errData;
        setError(data.error.message);
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return [error, isLoading, fetchData];
};
export default useFetch;
