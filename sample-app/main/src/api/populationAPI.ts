import axios from "axios";

const populationAPI = async (prefCode: any) => {
  
  const result = await axios
    .get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear", {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
      params: {
        prefCode: prefCode,
        cityCode: "-",
      }
    })
    .then((res: any) => {
      console.log(process.env.NEXT_PUBLIC_API_KEY)
      return res.data.result.data[0].data;
    });

  return result;
};

export default populationAPI;
