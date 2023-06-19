import Header from "./components/Header";
import Form from "./components/Form";
import Total from "./components/Total";
import ButtonReset from "./components/Elements/ButtonReset";
import { useState } from "react";
import "./assets/styles/normalize.scss";
import "./assets/styles/header.scss";
import "./assets/styles/form.scss";
import "./assets/styles/total.scss";
import "./assets/styles/button-reset.scss";
import "./assets/styles/page.scss";

function App() {
  const [checkboxes, setCheckboxes] = useState([]);
  const handleReset = () => {
    setCheckboxes([]);
  };

  return (
    <div className="App">
      <div className="all-content">
        <Header title={"TO DO"} className="header_text-title" color="pink" />
        <div className="content">
          <div className="conteiner">
            <Form
              checkboxes={checkboxes}
              setCheckboxes={setCheckboxes}
              className="conteiner_form"
            />
          </div>
          <div className="conteiner-total">
            <div className="conteiner-total_block">
              <Total
                checkboxes={checkboxes}
                className="conteiner-total_block_items"
              />
              <ButtonReset onClick={handleReset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
