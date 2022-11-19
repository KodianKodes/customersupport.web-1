/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Articles from "../../components/HelpAndSupport/articles/Articles";
import Cards from "../../components/HelpAndSupport/cards/Cards";
import Contact from "../../components/HelpAndSupport/contact/Contact";
import Header from "../../components/HelpAndSupport/header/Header";
import Input from "../../components/HelpAndSupport/input/Input";
import styles from "./HelpSupport.module.scss";

function HelpSupport({ setDisplay }) {
  return (
    <div className={styles.body}>
      <Header />
      <Input />
      <Cards setDisplay={setDisplay} />
      <Articles />
      <Contact />
    </div>
  );
}

export default HelpSupport;
