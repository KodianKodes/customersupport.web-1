import React from "react";
import styles from "./SentimentAnalysis.module.scss";
import arrowIcon from "./icons/arrow_back.svg";
import audioIcon from "./icons/audio_icon.svg";
import pieChart from "./icons/pie_chart.svg";
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
        <div className={`${styles.audio__file} ${styles.inner__container}`}>
          <div className={styles.audio__icon__container}>
            <img src={audioIcon} alt="audio icon" />
          </div>
          <div className={styles.audio__text}>
            <div className={styles.audio__name}>Recording.mp3</div>
            <div className={styles.audio__size}>4.0 mb</div>
          </div>
        </div>
        <div
          className={`${styles.overall__sentiment} ${styles.inner__container}`}
        >
          <div className={styles.title}>Overall sentiment</div>
          <div className={styles.sentiment__chart}>
            <img src={pieChart} alt="pie chart" />
          </div>
          <ul className={styles.sentiment__chart__legend}>
            <li className={styles.chart__legend__item}>
              <div className={`${styles.item__icon} ${styles.positive}`} />{" "}
              Positive
              <div className={styles.score}>15%</div>
            </li>
            <li className={styles.chart__legend__item}>
              <div className={`${styles.item__icon} ${styles.neutral}`} />{" "}
              Neutral
              <div className={styles.score}>15%</div>
            </li>
            <li className={styles.chart__legend__item}>
              <div className={`${styles.item__icon} ${styles.negative}`} />{" "}
              Negative
              <div className={styles.score}>15%</div>
            </li>
          </ul>
        </div>
        <div className={`${styles.verdict} ${styles.inner__container}`}>
          <div className={styles.verdict__item}>
            <div className={styles.verdict__title}>Agent Friendliness</div>
            <div className={styles.verdict__bar}>
              <div className={styles.inner__bar} style={{ width: `${90}%` }} />
              <div className={styles.bar__text}>90%</div>
            </div>
          </div>
          <div className={styles.verdict__item}>
            <div className={styles.verdict__title}>Agent Friendliness</div>
            <div className={styles.verdict__bar}>
              <div className={styles.inner__bar} style={{ width: `${85}%` }} />
              <div className={styles.bar__text}>85%</div>
            </div>
          </div>
          <div className={styles.verdict__item}>
            <div className={styles.verdict__title}>Verdict: </div>
            <div className={styles.final__verdict}>Customer is Satisfied</div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SentimentAnalysis;
