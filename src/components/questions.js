import data from "../data/occupations.json";
import { CompactPicker } from "react-color";
import React, { useState, useCallback } from "react";

export const Questions = () => {
  const occupation = data.occupations;
  const [name, setName] = useState("Code Killer");
  const [position, setPosition] = useState("Pilot");
  const [color, setColor] = useState("");
  const [open, setOpen] = useState(false);

  const updateColor = useCallback((color) => setColor(color), []);
  return (
    <div>
      <form className="question">
        <label className="text">Mighty name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <form className="question">
        <p className="text">Superpower</p>
        <select name="name" onChange={(e) => setPosition(e.target.value)}>
          <option value={position} selected disabled hidden>
            {position}
          </option>
          {occupation.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </form>
      <div className="question">
        <p className="name">Awesome color</p>
        <CompactPicker onChange={updateColor} />
      </div>

      {!open && (
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="btn btn-primary"
        >
          What's next?
        </button>
      )}

      {/* If open is true show your <div /> */}
      {open && (
        <div style={{ color: color.hex }}>
          <h2>Wow</h2>
          <p className="text">{name}, we see you are strong specialist!</p>
          <p className="text">
            By a lucky chance Avengers are looking for a {position} and you
            match it perfectly.{" "}
          </p>

          <p className="text">
            Avengers will be glad to see you in their orgnisation. Send your CV
            to <a href="#">jobs@avengers.com</a> &nbsp;with subject{" "}
            <i>
              Avengers trainee &nbsp;
              {position}
            </i>{" "}
            and wait then the first free-from-saving-the-earth-Avenger will
            contact you.
          </p>
          <button
            onClick={() => {
              setOpen(!open);
              setName("Code Killer");
              setPosition("Pilot");
            }}
            type="button"
            className="btn btn-primary"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};
