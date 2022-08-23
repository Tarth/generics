import { useEffect } from "react";
import { IData } from "../models/models";

export function useFetch(
  url: string,
  setData: (data: IData) => void,
  setIsLoading: (isLoading: boolean) => void
) {
  useEffect(() => {
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };
    fetchData(url).catch(console.error);
  }, []);
}

export async function GetData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
