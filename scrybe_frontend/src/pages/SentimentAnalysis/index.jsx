import React from "react";
import styles from "./SentimentAnalysis.module.scss";
import arrowIcon from "./icons/arrow_back.svg";
import AnalysisCard from "../../components/AnalysisCard";

function SentimentAnalysis() {
  return (
    <div className={styles.page__container}>
      <main className={styles.main__container}>
        <span className={styles.main__container__top}>
          <div className={styles.main__container__top__arrow__icon__container}>
            <img
              className={
                styles.main__container__top__arrow__icon__container__image
              }
              src={arrowIcon}
              alt="arrow icon"
            />
          </div>
          <div className={styles.main__container__top__title}>
            Sentiment analysis
          </div>
        </span>
        <div className={styles.analysis__cards}>
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
          <AnalysisCard />
        </div>
      </main>
      <aside className={styles.aside__container}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam placeat
        harum rem vero ut veritatis molestiae recusandae. Quidem autem tempora,
        ipsa explicabo sequi necessitatibus provident aperiam et! Perspiciatis,
        eligendi enim.
      </aside>
    </div>
  );
}

export default SentimentAnalysis;
