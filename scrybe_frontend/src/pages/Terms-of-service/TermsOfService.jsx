/* eslint-disable react/no-danger */
/* eslint-disable func-names */
import React from "react";
import { termsData } from "../../assets/data/index";
import styles from "./TermsOfService.module.scss";

function TermsOfService() {
  return (
    <div className={styles.terms__wrapper}>
      <div className={styles.terms__title}>
        <h2>Terms of Services</h2>
      </div>
      <div className={styles.terms__details}>
        <h3>Effective date: 2022-11-16</h3>
        <h3>
          Please read these terms and conditions carefully before using Our
          Service.
        </h3>
      </div>

      <div className={styles.terms__list}>
        <ol>
          {termsData.map((term) => (
            <li key={term}>
              {term.title}
              <p dangerouslySetInnerHTML={{ __html: term.content }} />
            </li>
          ))}
        </ol>
      </div>
      <form action="#">
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" required />I Agree to the Terms
          of Service
        </label>
        <div className={styles.terms__btn}>
          <input type="submit" value="AGREE" />
        </div>
      </form>
    </div>
  );
}

export default TermsOfService;
