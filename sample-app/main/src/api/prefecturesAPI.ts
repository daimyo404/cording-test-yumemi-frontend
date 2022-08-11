import axios from "axios";
import { resasUrl } from "../const";

const prefecturesAPI = async () => {

  const result = await axios
    .get(resasUrl.prefectures, {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    }) 
    .then((res: any) => {
      return res.data.result;
    });

  return result;
};

export default prefecturesAPI;
