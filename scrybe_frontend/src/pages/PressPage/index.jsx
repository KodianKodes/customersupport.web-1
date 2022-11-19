import React from "react";
import styles from "./press.module.scss";
import pressCardone from "../myAssets/pressCardone.png";
import pressCardtwo from "../myAssets/pressCardtwo.png";
import pressCardthree from "../myAssets/pressCardthree.png";
import pressSmcardOne from "../myAssets/pressSmcardOne.png";
import pressSmcardTwo from "../myAssets/pressSmcardTwo.png";
import headDot from "../myAssets/headDot.png";
import arrowLeft from "../myAssets/arrow__left.png";
import logoText from "../myAssets/logoText.png";
// import pressHero from "../myAssets/pressHero.png";

const index = () => {
  return (
    <div>
      <section className={styles.section__one}>
        <div className={styles.sect__container}>
          <div className={styles.hero__heading}>
            <h1 className={styles.hero__head}>
              <span className={styles.hero__inline}>News</span>room
              <span>
                <img src={headDot} alt="Full stop" />
              </span>
            </h1>
          </div>
          <div className={styles.hero__subhead}>
            <p className={styles.hero__subtext}>
              Get access to our news, Updates, and Notifications
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section__two}>
        <div className={styles.sect__container} />
      </section>
      <section className={styles.section__three}>
        {/* <div>
          <img src={pressHero} alt="" />
        </div> */}
        <div className={styles.sect__container}>
          <div className={styles.three__center}>
            <div className={styles.three__left}>
              <img src={logoText} alt="Scrybe Text" />
            </div>
            <div className={styles.three__right}>
              <div className={styles.three__top}>
                <p className={styles.three__heading}>
                  An AI powered tool tailored for customers success and
                  satisfaction
                </p>
              </div>
              <div className={styles.three__bottom}>
                <div className={styles.three__flex}>
                  <div className={styles.three__each}>
                    <p className={styles.three__head}>2022</p>
                    <p className={styles.three__text}>Founded</p>
                  </div>
                  <div className={styles.three__each}>
                    <p className={styles.three__head}>20+</p>
                    <p className={styles.three__text}>Active Users</p>
                  </div>
                </div>
                <div className={styles.three__flex}>
                  <div className={styles.three__each}>
                    <p className={styles.three__head}>200+</p>
                    <p className={styles.three__text}>Employees</p>
                  </div>
                  <div className={styles.three__each}>
                    <p className={styles.three__head}>Headquartered</p>
                    <p className={styles.three__text}>in Abuja Nigeria</p>
                  </div>
                </div>
                <div className={styles.three__sep}>
                  <p className={styles.three__head}>Get in touch</p>
                  <p className={styles.three__text}>info@scrybe.co.za</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section__four}>
        <div className={styles.sect__container}>
          <div className={styles.four__heading}>
            <h2 className={styles.four__head}>Featured</h2>
          </div>
          <div className={styles.four__cards}>
            <div className={styles.card__container}>
              <img
                src={pressCardone}
                alt="Icon of press card"
                className={styles.each__card}
              />
            </div>
            <div className={styles.card__container}>
              <img
                src={pressCardtwo}
                alt="Icon of press card"
                className={styles.each__card}
              />
            </div>
            <div className={styles.card__container}>
              <img
                src={pressCardthree}
                alt="Icon of press card"
                className={styles.each__card}
              />
            </div>
            <div className={styles.card__container}>
              <img
                src={pressCardone}
                alt="Icon of press card"
                className={styles.each__card}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section__five}>
        <div className={styles.sect__container}>
          <div className={styles.five__top}>
            <div className={styles.five__links}>
              <a href="/" className={styles.point__link}>
                Latest news
              </a>
            </div>
            <div className={styles.five__pointlinks}>
              <a href="/" className={styles.point__link}>
                Brand guideline
              </a>
            </div>
          </div>
          <div className={styles.five__bottom}>
            <div className={styles.five__articles}>
              <div className={styles.article__icon}>
                <img
                  src={pressSmcardOne}
                  alt="Icon of Press cards"
                  className={styles.each__icon}
                />
              </div>
              <div className={styles.five__heading}>
                <h3 className={styles.five__head}>
                  Social Media sentiment analysis using twitter datasets
                </h3>
              </div>
              <div className={styles.five__subtext}>
                <p className={styles.five__texts}>
                  Several hundreds of thousands of raw data are...
                </p>
              </div>
              <div className={styles.more__details}>
                <a className={styles.read__more} href="/">
                  Read more
                </a>
                <span>
                  <img
                    src={arrowLeft}
                    alt="Arrow action to another"
                    className={styles.arrowleft}
                  />
                </span>
              </div>
            </div>
            <div className={styles.five__articles}>
              <div className={styles.article__icon}>
                <img
                  src={pressSmcardTwo}
                  alt="Icon of Press cards"
                  className={styles.each__icon}
                />
              </div>
              <div className={styles.five__heading}>
                <h3 className={styles.five__head}>
                  Social Media sentiment analysis using twitter datasets
                </h3>
              </div>
              <div className={styles.five__subtext}>
                <p className={styles.five__texts}>
                  Several hundreds of thousands of raw data are...
                </p>
              </div>
              <div className={styles.more__details}>
                <a className={styles.read__more} href="/">
                  Read more
                </a>
                <span>
                  <img
                    src={arrowLeft}
                    alt="Arrow action to another"
                    className={styles.arrowleft}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
