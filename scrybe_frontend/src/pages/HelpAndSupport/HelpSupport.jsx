/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Articles from "../../components/HelpAndSupport/articles/Articles";
import Cards from "../../components/HelpAndSupport/cards/Cards";
import Contact from "../../components/HelpAndSupport/contact/Contact";
import Header from "../../components/HelpAndSupport/header/Header";
import Input from "../../components/HelpAndSupport/input/Input";

function HelpSupport({ setDisplay }) {
  return (
    <div className="HelpSupport">
      <Header />
      <Input />
      <Cards setDisplay={setDisplay} />
      <Articles />
      <Contact />
    </div>
  );
}

export default HelpSupport;
