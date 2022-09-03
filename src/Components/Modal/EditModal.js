import React from "react";
import styles from "./Modal.module.css";
const EditModal = ({ heading, ed, setEd, submitEdit }) => {
  return (
    <div>
      <h4>{heading}</h4>
      <div>
        <input
          type="text"
          placeholder="Edit Title"
          onChange={(e) => setEd({ ...ed, title: e.target.value })}
          value={ed?.title}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Edit Tagline"
          onChange={(e) => setEd({ ...ed, tagline: e.target.value })}
          value={ed?.tagline}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Edit Text"
          className={styles?.last}
          onChange={(e) => setEd({ ...ed, text: e.target.value })}
          value={ed?.text}
        />
      </div>
      <center>
        <input
          type="button"
          className={styles?.btn}
          value="Submit"
          onClick={submitEdit}
        />
      </center>
    </div>
  );
};

export default EditModal;
