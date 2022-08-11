import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { resasUrl as url } from "../const";

const populationAPI = async (prefCode: any) => {
  
  type PerYear = {
    year: number,
    value: number,
    rate?: number,
  }

  type Composition = {
    label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口",
    data: PerYear[],
  }

  type ApiResponse = {
    message: null,
    result: {
      boundaryYear: string,
      data: Composition[]
    }
  }

  const options: AxiosRequestConfig = {
    url: url.pupulationPerYear,
    method: "GET",
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    params: {
      prefCode: prefCode,
      cityCode: "-",
    }
  }
  
  const result = await axios(options)
    .then((res: AxiosResponse<ApiResponse>) => {
      console.log(process.env.NEXT_PUBLIC_API_KEY)
      //NOTE: 総人口をレスポンス
      return res.data.result.data[0].data;
    }).catch((e: AxiosError) => {
      console.log(e.message)
    })

  return result;
};

export default populationAPI;
