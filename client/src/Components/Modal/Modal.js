import React from "react";
import styles from "./Modal.module.css";

const Modall = ({
  title,
  setTitle,
  tagline,
  setTagline,
  text,
  setTextt,
  open,
  onClose,
  onClick,
  heading,
  onEdit,
  id,
}) => {
  const fire = () => {
    onEdit(id, { title, tagline, text });
  };
  return (
    <div>
      <h4>{heading}</h4>
      <div>
        <input
          type="text"
          placeholder="Edit Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Edit Tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Edit Text"
          className={styles?.last}
          onChange={(e) => setTextt(e.target.value)}
          value={text}
        />
      </div>
      <center>
        <input
          type="button"
          className={styles?.btn}
          value="Submit"
          onClick={heading === "Add Note" ? onClick : fire}
        />
      </center>
    </div>
  );
};

export default Modall;
