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
    fileName: "Shullamite Audio Recording.mp3",
    length: "05:23",
    size: "3.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Processing",
  },
  {
    id: 3,
    fileName: "Bright Audio Recording.mp3",
    length: "05:23",
    size: "6.8 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successful",
  },
  {
    id: 4,
    fileName: "Sim Sim Audio Recording.mp3",
    length: "05:23",
    size: "6.8 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successful",
  },

  {
    id: 5,
    fileName: "Alice Audio Recording.mp3",
    length: "05:23",
    size: "8.6 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Failed",
  },
  {
    id: 6,
    fileName: "Alice Audio Recording. mp3",
    length: "05:23",
    size: "5.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Failed",
  },
  {
    id: 7,
    fileName: "Valerie Audio Recording. mp3",
    length: "05:23",
    size: "9.8 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successful",
  },
  {
    id: 8,
    fileName: "David Audio Recording. mp3",
    length: "05:23",
    size: "6.8 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successful",
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
              <th />
              <th>File Name</th>
              <th>Length</th>
              <th>Size</th>
              <th>Date</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody className={styles["uploaded-table-body"]}>
            {recordings.map((recording) => (
              <tr key={recording.id}>
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
                <td>{recording.fileName}</td>
                <td>{recording.length}</td>
                <td>{recording.size}</td>
                <td>{recording.date}</td>
                <td>
                  <strong
                    style={{
                      color:
                        // eslint-disable-next-line no-nested-ternary
                        recording.status === "Processing"
                          ? "#FFB800"
                          : recording.status === "Successful"
                          ? "#3bb031"
                          : "#ff291b",
                    }}
                  >
                    {recording.status}{" "}
                    {recording.status === "Failed" && (
                      <a href="!" className={styles.retry}>
                        retry
                      </a>
                    )}
                  </strong>
                </td>
                <td className={styles["uploaded-table-body-cell delete-btn"]}>
                  <img
                    src={deleteIcon}
                    alt="delete-icon "
                    className={styles["delete-icon"]}
                  />
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
