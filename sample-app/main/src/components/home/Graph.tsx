import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type graphProps = {
  populationDrawing: any[];
};

const Graph: React.FC<graphProps> = (props) => {
  const { populationDrawing } = props;

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "グラフタイトル",
      },
    },
  };

  const labels = [
    "1960",
    "1965",
    "1970",
    "1975",
    "1980",
    "1985",
    "1990",
    "1995",
    "2000",
    "2005",
    "2010",
    "2015",
    "2020",
    "2025",
    "2030",
    "2035",
    "2040",
    "2045",
  ];

  const populationDatasets =
    populationDrawing.length &&
    populationDrawing.map((x: any) => {
      const data = x.map((y: any) => {
        const value = y.value;
        return value;
      });
      const result = {
        label: x.prefName,
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };
      return result;
    });

  const data: any = {
    labels,
    datasets: populationDatasets,
  };

  return (
    <>
      {populationDatasets ? <Line options={options} data={data} /> : undefined}
    </>
  );
};

export default Graph;
