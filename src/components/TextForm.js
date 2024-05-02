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

  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
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
          placeholder="enter the text here"
        ></textarea>
      </div>
      <button onClick={toUpperCase} className="btn btn-warning">
        to uppercase
      </button>
      <button onClick={toLowerCase} className="btn btn-primary ms-3">
        to lowercase
      </button>
      <div className="container my-3">
        <h4>Your text summary</h4>
        <p>
          {text.trim() === ""
            ? "0 words and 0 characters"
            : `${text.split(" ").length} words and ${text.length} characters`}
        </p>
        <p>
          {text.trim() === ""
            ? "0 mins to read"
            : `${0.008 * text.split("").length} mins to read`}
        </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  );
};

export default TextForm;
