import React from "react";
import BasicTable from "./BasicTable";
import styles from "../styles/AgentRecordings.module.scss";

function AgentRecordings() {
  return (
    <div className={styles.recordings}>
      <p className={styles.title}>Agent's recordings</p>
      <div className={styles.tableContainer}>
        <BasicTable />
      </div>
    </div>
  );
}

export default AgentRecordings;
