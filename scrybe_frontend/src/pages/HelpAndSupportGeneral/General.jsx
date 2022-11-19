/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Header from "../../components/HelpAndSupport/header/Header";
import HelpSupportNav from "../../components/HelpAndSupport/help-support-nav/HelpSupportNav";
import General1 from "../../components/HelpAndSupport/general1/General1";
import General2 from "../../components/HelpAndSupport/general2/General2";
import Contact from "../../components/HelpAndSupport/contact/Contact";
import styles from "./General.module.scss";

function General() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <Header />

      <div className={styles.general}>
        <HelpSupportNav setDisplay={setDisplay} />

        {display ? <General1 setDisplay={setDisplay} /> : <General2 />}

        <Contact />
      </div>
    </div>
  );
}

export default General;
