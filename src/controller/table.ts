import { IData } from "../models/models";
import { useFetch, GetData as GetDataFromDB } from "../services/services";

export function GetDataHook(
  url: string,
  setData: (data: IData) => void,
  setIsLoading: (isLoading: boolean) => void
) {
  useFetch(url, setData, setIsLoading);
}

export function GetData(url: string) {
  return GetDataFromDB(url);
}
