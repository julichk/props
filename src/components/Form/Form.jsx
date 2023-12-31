import classNames from "classnames";
import { useState } from "react";

function Form({ checkboxes, setCheckboxes, className }) {
  // Додали пропси checkboxes та setCheckboxes
  const formClassName = classNames(className);

  const [inputText, setInputText] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      const newCheckbox = {
        className: "conteiner_checkbox_check",
        label: inputText,
      };
      setCheckboxes([...checkboxes, newCheckbox]);
      setInputText("");
    }
  };

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="note-box">
      <form action="#" className={formClassName}>
        <input
          type="text"
          name="newItem"
          value={inputText}
          onChange={handleInput}
          className="conteiner_form_input"
          placeholder="Create a new todo..."
        ></input>
        <button
          type="submit"
          className="conteiner_form_button"
          onClick={handleClick}
        >
          <svg
            className="button-svg"
            width="41"
            height="29"
            viewBox="0 0 56 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8394 2.50969C38.8238 2.79836 41.5346 12.2524 41.3919 16.9433"
              stroke="white"
              stroke-width="4"
            />
            <line
              x1="0.828796"
              y1="2.14552"
              x2="29.9339"
              y2="2.14552"
              stroke="white"
              stroke-width="4"
            />
            <path
              d="M39.8439 32.0585C40.6249 32.8523 41.891 32.8729 42.672 32.1046L55.3982 19.5841C56.1791 18.8158 56.1791 17.5495 55.3982 16.7557C54.6172 15.9619 53.3511 15.9413 52.5701 16.7096L41.2579 27.8389L29.9457 16.3408C29.1648 15.547 27.8986 15.5263 27.1177 16.2947C26.3367 17.063 26.3367 18.3293 27.1177 19.1231L39.8439 32.0585ZM39.2582 15.4553L39.2582 30.6347L43.2577 30.6999L43.2577 15.5205L39.2582 15.4553Z"
              fill="white"
            />
          </svg>
        </button>
      </form>

      <div>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.className} className="conteiner_checkbox">
            <input type="checkbox" className={checkbox.className} />
            <label
              htmlFor={checkbox.className}
              className="conteiner_checkbox_text"
            >
              {checkbox.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
