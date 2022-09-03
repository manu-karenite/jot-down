import React from "react";
import styles from "./Card.module.css";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Modall from "../Modal/Modal.js";
import PushPinIcon from "@mui/icons-material/PushPin";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Tooltip from "@mui/material/Tooltip";
const Card = ({ obj, deleteNode, changePin1, editNow }) => {
  return (
    <>
      <div className={styles?.master}>
        <div className={styles?.outer} onClick={() => editNow(obj)}>
          <div className={styles.title}>
            <div>{obj?.title} </div>
            <div>
              {obj?.pinned === true && (
                <IconButton>
                  <PushPinIcon sx={{ color: "#ff0000" }} />
                </IconButton>
              )}
            </div>
          </div>
          <div className={styles.tagline}>{obj?.tagline}</div>
          <div className={styles.body}>{obj?.text}</div>
        </div>
        <div className={styles.options}>
          {/* <div>
            <IconButton>
              <EditIcon sx={{ color: "#6dd3ce" }} />
            </IconButton>
          </div> */}
          <div>
            {obj?.pinned === true && (
              <Tooltip title="Unpin this Note">
                <IconButton onClick={(e) => changePin1(obj?._id, false)}>
                  <BackspaceIcon sx={{ color: "#a13d63" }} />
                </IconButton>
              </Tooltip>
            )}
            {obj?.pinned === false && (
              <Tooltip title="Pin this Note">
                <IconButton onClick={(e) => changePin1(obj?._id, true)}>
                  <PushPinIcon sx={{ color: "#00ff00" }} />
                </IconButton>
              </Tooltip>
            )}
          </div>
          <div>
            <Tooltip title="Delete Note">
              <IconButton onClick={(e) => deleteNode(obj?._id)}>
                <DeleteIcon sx={{ color: "#a13d63" }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
