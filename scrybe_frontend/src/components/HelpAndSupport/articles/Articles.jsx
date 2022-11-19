/* eslint-disable react/react-in-jsx-scope */
import styles from "./Articles.module.scss";
import infoCircle from "../assets/info-circle.svg";

function Articles() {
  return (
    <div className={styles.articles_style}>
      <div className={styles.info_intro}>
        <img src={infoCircle} alt="info circle" />
        <p>Promoted Articles</p>
      </div>

      <div className={styles.articles_cont}>
        <div className={styles.articles_wrapper}>
          <h3> Article: Transcription v Automated Transcription </h3>
          <h3>Guide: How to login and sign up </h3>
          <h3>Article: Placing a rush transcription Order</h3>
          <h3>Guide: Monitoring your employees data</h3>
          <h3>Article: How to get your downloads in real time</h3>
        </div>
      </div>
    </div>
  );
}

export default Articles;
