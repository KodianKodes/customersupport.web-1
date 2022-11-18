import React from "react";
import "./uploadedRecordings.scss";

// dummy recordings
const recordings = [
  {
    id: 1,
    fileName: "Ore Audio Recording.mp3",
    length: "00:05:23",
    size: "4.2 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Processing",
  },
  {
    id: 2,
    fileName: "Shullamite Audio Recording. mp3",
    length: "00:05:23",
    size: "3.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Successuf",
  },
  {
    id: 3,
    fileName: "Bright Audio Recording. mp3",
    length: "00:05:23",
    size: "4.4 MB",
    date: "13/11/22 (5:22 PM)",
    status: "Failed",
  },
];
function UploadedRecordings() {
  const timeLeft = 20;
  return (
    <div className="uploaded-recordings">
      <div className="uploaded-header">
        <h1>Transcription Status </h1>
        <h2 className="est-time-left">
          Estimated Time Left: <strong>{timeLeft}</strong> Min
        </h2>
      </div>
    </div>
  );
}

export default UploadedRecordings;
