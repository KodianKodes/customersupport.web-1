import closecircle from "../images/closecircle.png";
import { PrimaryButton } from "./button.component";
import { useState } from "react";
import uploadIcon from "../images/folderIcon.png";
import layer from "../images/layer.svg";


export function Modal({ closeModal }) {
  const [showUploadProgress, setShowUploadProgress] = useState(false);
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Upload audio files</h3>
          <p>Upload agent records to transcribe</p>
          <div className="close">
            <img src={closecircle} alt="" onClick={() => closeModal(false)} />
          </div>
        </div>
        <div className="modal-body-container">
          <div className="modal-body">
            <DragAndDrop setShowUploadProgress={setShowUploadProgress} />
            { showUploadProgress && <UploadProgress /> }
            <UploadProgressList />
          </div>
        </div>
      </div>
    </div>
  );
}

function DragAndDrop({ setShowUploadProgress }) {
  const showUploadProgress = () => {
    setShowUploadProgress(true);
  }
  return (
    <section className="drag-and-drop">
      <img src={layer} alt="" />
      <h3>Drag and drop agent audio call <br /> recordings</h3>
      <div className="or-wrapper">
        <hr/>
        <p className="or">
          or
        </p>
      </div>
      <p className="small-text">Audio files must be smaller than 10mb</p>
      {/* <button>Browse Files</button> */}
      <PrimaryButton text="Browse Files" onClick={showUploadProgress}/>
    </section>
  );  
}

function UploadProgress() {
  const progress = 80
  return (
    <section style={{ border: '1px solid #e2e2e2', borderRadius: '5px'}}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%'}}>
          <img src={uploadIcon} alt="alt-" />
          <p>12/30</p>
        </div>
        <div style={{ width: '80%'}}>
          <p>Uploading...</p>
          <p>File name</p>
          <div className="progress-wrapper">
            <div className="progress-bar" style={{width: progress + '%'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UploadProgressList(){
  return (
    <section>
      {/* HOLD LIST OF FILES */}
    </section>
  )
}

