import React from "react";
import styles from "./TranscriptionMain.module.scss";
import TranscriptionsList from "./TranscriptionsList/TranscriptionsList";
import TranscriptionRIghtBar from "./TranscriptionRightBar/TranscriptionRightBar";

function TranscriptionMain() {
  return (
    <div className={styles.TranscriptionMain}>
      <TranscriptionsList />
      <TranscriptionRIghtBar />
    </div>
  );
}

export default TranscriptionMain;
