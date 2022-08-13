import type { NextPage } from "next";
import HtmlHead from "../main/src/components/common/HtmlHead";
import Typography from "../main/src/components/common/Typography";
import CheckBox from "../main/src/components/home/CheckBox";
import Graph from "../main/src/components/home/Graph";
import prefecturesApi from "../main/src/api/prefecturesAPI";
import populationApi from "../main/src/api/populationAPI";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [prefectures, setPrefectures] = useState([]);
  const [population, setPopulation] = useState([]);
  const [populationDrawing, setPopulationDrawing] = useState([]);

  const onChange = (prefCode: number, prefName: string, checked: boolean) => {
    checked
      ? setPopulationDrawing([...populationDrawing, population[prefCode - 1]])
      : setPopulationDrawing(
          populationDrawing.filter((population: any) => {
            return population.prefName !== prefName;
          })
        );
  };

  useEffect(() => {
    const fetch = async () => {
      const prefectures: any = await prefecturesApi();
      const populationComposition: any = await Promise.all(
        prefectures.map(async (prefectures: any) => {
          const result = await populationApi(prefectures.prefCode);
          const population = Object.assign(result, {
            prefCode: prefectures.prefCode,
            prefName: prefectures.prefName,
          });
          return population;
        })
      );

      setPrefectures(prefectures);
      setPopulation(populationComposition);
    };
    fetch();
  }, []);

  return (
    <>
      <ChakraProvider>
        <HtmlHead></HtmlHead>
        <Typography
          message={"都道府県別人口グラフ"}
          fontSize={"3vw"}
          textAlign={"center"}
        ></Typography>
        <Typography
          message={"都道府県"}
          fontSize={"1vw"}
          textAlign={"left"}
        ></Typography>
        <CheckBox
          prefectures={prefectures}
          onChange={(prefCode: number, prefName: string, checked: boolean) => {
            onChange(prefCode, prefName, checked);
          }}
        ></CheckBox>
        <Graph populationDrawing={populationDrawing}></Graph>
      </ChakraProvider>
    </>
  );
};

export default Home;
