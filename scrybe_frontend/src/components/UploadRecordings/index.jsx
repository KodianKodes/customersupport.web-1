/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import deleteIcon from "./imgs/delete-icon.svg";
import soundwave from "./imgs/soundwave.svg";
import styles from "./uploadedRecordings.module.scss";
// dummy recordings
const recordings = [
  {
    id: 1,
    fileName: "Ore Audio Recording.mp3",
    length: "05:23",
    size: "4.2 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Processing",
  },
  {
    id: 2,
    fileName: "Shullamite Audio Recording. mp3",
    length: "05:23",
    size: "3.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successuf",
  },
  {
    id: 3,
    fileName: "Bright Audio Recording. mp3",
    length: "05:23",
    size: "4.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Failed",
  },
];
function UploadedRecordings() {
  const timeLeft = 20;
  return (
    <div className={styles["uploaded-recordings"]}>
      <div className={styles["uploaded-header"]}>
        <h1>Transcription Status </h1>
        <h2 className="est-time-left">
          Estimated Time Left:{" "}
          <strong className={styles["est-time-left-num"]}>{timeLeft}</strong>{" "}
          Min
        </h2>
      </div>
      <div className={styles["uploaded-table-wrap"]}>
        <table className={styles["uploaded-table"]}>
          <thead className={styles["uploaded-table-header"]}>
            <tr className={styles["uploaded-table-row"]}>
              <th className={styles["table-header-cells"]} />
              <th className={styles["table-header-cells"]}>File Name</th>
              <th className={styles["table-header-cells"]}>Length</th>
              <th className={styles["table-header-cells"]}>Size</th>
              <th className={styles["table-header-cells"]}>Date</th>
              <th className={styles["table-header-cells"]}>Status</th>
              <th className={styles["table-header-cells"]} />
            </tr>
          </thead>
          <tbody className={styles["uploaded-table-body"]}>
            {recordings.map((recording) => (
              <tr
                className={styles["uploaded-table-body-row"]}
                key={recording.id}
              >
                <td className={styles["uploaded-table-body-checkbox-img-wrap"]}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={styles["uploaded-table-body-checkbox"]}
                  />
                  <img
                    src={soundwave}
                    alt="soundwave-icon"
                    className={styles["uploaded-table-body-cell-img"]}
                  />
                </td>
                <td className={styles["uploaded-table-body-cell"]}>
                  {recording.fileName}
                </td>
                <td className={styles["uploaded-table-body-cell"]}>
                  {recording.length}
                </td>
                <td className={styles["uploaded-table-body-cell"]}>
                  {recording.size}
                </td>
                <td className={styles["uploaded-table-body-cell"]}>
                  {recording.date}
                </td>
                <td className={styles["uploaded-table-body-cell"]}>
                  {recording.status}
                </td>
                <td className={styles["uploaded-table-body-cell delete-btn"]}>
                  <img src={deleteIcon} alt="delete-icon " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UploadedRecordings;
