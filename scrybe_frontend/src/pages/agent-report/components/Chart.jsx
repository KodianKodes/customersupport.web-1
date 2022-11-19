import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import styles from "../styles/Chart.module.scss";

function Charts() {
  const [options, setOptions] = useState({
    series: [
      {
        name: "Positive",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Neutral",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
      {
        name: "Negative",
        data: [35, 41, 36, 26, 45, 48, 52],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["11", "12", "13", "14", "15", "16", "17"],
      },
      yaxis: {
        title: {},
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter(val) {
            return val + " mins";
          },
        },
      },
    },
  });
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartWrap}>
        <ApexCharts
          options={options.options}
          series={options.series}
          type="bar"
          className={styles.chartImg}
        />
      </div>
    </div>
  );
}

export default Charts;
