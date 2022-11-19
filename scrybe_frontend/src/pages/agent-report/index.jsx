import React from "react";
import AgentDetails from "./components/AgentDetails";
import AgentRecordings from "./components/AgentRecordings";
import Chart from "./components/Chart";
import styles from "./styles/AgentReport.module.scss";

function AgentReport() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.topDetailsDiv}>
          <Chart />
          <AgentDetails />
        </div>
        <AgentRecordings />
      </div>
    </div>
  );
}
export default AgentReport;
