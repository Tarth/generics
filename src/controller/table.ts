import { IData } from "../models/models";
import { useFetch } from "../services/useFetch";

export function GetData(
  url: string,
  setData: (data: IData) => void,
  setIsLoading: (isLoading: boolean) => void
) {
  useFetch(url, setData, setIsLoading);
}
