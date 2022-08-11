import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { resasUrl as url } from "../const";

type Prefectures = {
  prefCode: number,
  prefName: string,
}

type ApiResponse = {
  message: null,
  result: Prefectures[],
}

const prefecturesAPI = async () => {

  const options: AxiosRequestConfig = {
    url: url.prefectures,
    method: "GET",
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  }
  

  const result = await axios(options)
    .then((res: AxiosResponse<ApiResponse>) => {
      return res.data.result;
    }).catch((e: AxiosError) => {
      console.log(e.message)
    })

  return result;
};

export default prefecturesAPI;
