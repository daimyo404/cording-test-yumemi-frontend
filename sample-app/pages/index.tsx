import type { NextPage } from "next";
import HtmlHead from "../main/src/components/common/HtmlHead";
import Typography from "../main/src/components/common/Typography";
import CommonCheckBox from "../main/src/components/home/CheckBox";
import Graph from "../main/src/components/home/Graph";
import prefecturesAPI from "../main/src/api/prefecturesAPI";
import populationAPI from "../main/src/api/populationAPI";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";
import Header from "../main/src/components/common/Typography";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";

const Home: NextPage = () => {
  const [prefectures, setPrefectures] = useState([]);
  const [population, setPopulation] = useState([]);
  const [populationDrawing, setPopulationDrawing] = useState([]);

  const onChange = (prefCode: any, prefName: any, checked: any) => {
    // const hoge: any = { population: population[prefCode], prefName: prefName };

    //
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
      const prefectures: any = await prefecturesAPI();
      const populationComposition: any = await Promise.all(
        prefectures.map(async (prefectures: any) => {
          const result = await populationAPI(prefectures.prefCode);
          const population = Object.assign(result, {
            prefCode: prefectures.prefCode,
            prefName: prefectures.prefName,
          });
          return population;
        })
      );

      setPrefectures(prefectures);
      setPopulation(populationComposition);
      // setPopulation(populationComposition);
    };
    fetch();
  }, []);

  return (
    <>
      <ChakraProvider>
        <HtmlHead></HtmlHead>
        <Typography
          message={"Title"}
          fontSize={"3vw"}
          textAlign={"center"}
        ></Typography>
        <Typography
          message={"都道府県"}
          fontSize={"1vw"}
          textAlign={"left"}
        ></Typography>
        <CommonCheckBox
          prefectures={prefectures}
          onChange={(prefCode: any, prefName: any, checked: any) => {
            onChange(prefCode, prefName, checked);
          }}
        ></CommonCheckBox>
        <Graph populationDrawing={populationDrawing}></Graph>
      </ChakraProvider>
    </>
  );
};

export default Home;
