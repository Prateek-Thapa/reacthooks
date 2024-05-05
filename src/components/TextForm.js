import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearAll = () => {
    let newText = "";
    setText(newText);
  };
  const toCapitalize = () => {
    let words = text.split(" ");
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = capitalizedWords.join(" ");
    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const copyToClipBoard = () => {
    const text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div className="mb-3">
        <h3 style={{ textTransform: "uppercase" }}>{props.heading}</h3>

        <label htmlFor="text" class="form-label"></label>
        <textarea
          value={text}
          onChange={handleChange}
          className="form-control"
          id="text"
          rows="3"
          placeholder="Enter your text here..."
        ></textarea>
      </div>
      <div className="container-fluid">
        <button onClick={toUpperCase} className="btn btn-warning">
          To UpperCase
        </button>
        <button onClick={toLowerCase} className="btn btn-primary ms-3">
          To LowerCase
        </button>
        <button onClick={clearAll} className="btn btn-danger ms-3">
          Clear
        </button>
        <button onClick={toCapitalize} className="btn btn-success ms-3">
          To Capitalize
        </button>
        <button onClick={handleExtraspaces} className="btn btn-info ms-3 ">
          Clear extra spaces
        </button>
        <button onClick={copyToClipBoard} className="btn btn-info ms-3 ">
          Copy
        </button>
      </div>
      <div className="container"></div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>
          {text.trim() === ""
            ? "0 Words and 0 Characters"
            : `${text.split(" ").length} words and ${text.length} characters`}
        </p>
        <p>
          {text.trim() === ""
            ? "0 Minutes to read"
            : `${0.008 * text.split("").length} Minutes to read`}
        </p>
        <h2>Preview</h2>
        <div className="container mx-auto">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
