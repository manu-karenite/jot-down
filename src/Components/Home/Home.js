import React from "react";
import Card from "../Cards/Card.js";
import styles from "./Home.module.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Modall from "../Modal/Modal.js";
import EditModal from "../Modal/EditModal.js";
import { toast } from "react-toastify";
import Pagination from "../Pagination/Pagination.js";

import {
  addNote,
  getNotes,
  editNote,
  deleteNode,
  changePin,
} from "../API/notes.js";
const Home = () => {
  const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [text, setTextt] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [totalPgs, setTotalPgs] = React.useState(0);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setTitle("");
    setTextt("");
    setTagline("");
  };

  //API CALL FOR GETTING NOTES FROM BACKEND
  const funcToGetNotes = () => {
    getNotes(pg)
      .then((res) => {
        setNotes(res.data?.data);
        setTotalPgs(res.data.total);
      })
      .catch((err) =>
        toast.error("Unexpected Error Occurred! Please Try Again")
      );
  };
  //Paginationn
  const [pg, setPg] = React.useState(1);
  React.useEffect(() => {
    funcToGetNotes();
  }, [pg]);
  //VALIDATE FORM ON SUBMIT FOR CREATE NOTE FORM
  const onClick = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      toast.warning("Please enter a Title for Note");
      return;
    }
    if (tagline.length === 0) {
      toast.warning("Please enter a Tagline for Note");
      return;
    }
    if (text.length === 0) {
      toast.warning("Please enter a Text for Note");
      return;
    }
    console.log(title, tagline, text);
    addNote({ title, tagline, text })
      .then((res) => {
        toast.success("Note Created Succesfully! Pin it to keep on top");
        funcToGetNotes();
      })
      .catch((err) =>
        toast.error("Could not Created Note! Please Try Again Later")
      );
    setTitle("");
    setTagline("");
    setTextt("");
    setOpen(false);
  };

  //for deleting notes
  const deleteNodee = (id) => {
    console.log(id);
    deleteNode(id)
      .then((res) => {
        toast.success("Deleted Note Successfully! 🪣");
        funcToGetNotes();
      })
      .catch((err) => toast.error("Please Try Again"));
  };
  //FOR CHANGING PIN/UNPINNED STATUS
  const changePin1 = (id, status) => {
    changePin(id, status)
      .then((res) => {
        toast.success("Changes Made Succesfully");
        funcToGetNotes();
      })
      .catch((err) => toast.error("Unexpected Error"));
  };

  //FOR EDITING ONLY
  const [ed, setEd] = React.useState({ title: "", tagline: "", text: "" });
  const [openedModal, setOpenedModal] = React.useState(false);
  const closeEdModal = () => {
    setOpenedModal(false);
  };
  const editNow = (data) => {
    setOpenedModal(true);
    setEd({
      title: data?.title,
      tagline: data?.tagline,
      text: data?.text,
      id: data?._id,
    });
  };

  const submitEdit = (id) => {
    if (ed?.title.length === 0) {
      toast.warning("Please enter a Title for Note");
      return;
    }
    if (ed?.tagline.length === 0) {
      toast.warning("Please enter a Tagline for Note");
      return;
    }
    if (ed?.text.length === 0) {
      toast.warning("Please enter a Text for Note");
      return;
    }
    //okay to proceed now...
    editNote(ed)
      .then((res) => {
        toast.success("Note Edited 📝");
        funcToGetNotes();
        setOpenedModal(false);
      })
      .catch((res) => toast.error("💥 Unexpected Error!"));
  };

  return (
    <div style={{ backgroundColor: "#e2e1e0" }}>
      <Pagination pg={pg} setPg={setPg} totalPgs={totalPgs} />

      <div className={styles?.buttonWrapper}>
        <button onClick={onOpenModal} className={styles?.addTask}>
          Add Note
        </button>
      </div>
      <div className={styles?.cardsOuter}>
        <Modal open={open} onClose={onCloseModal} center>
          <Modall
            heading="Add Note"
            title={title}
            setTitle={setTitle}
            tagline={tagline}
            setTagline={setTagline}
            text={text}
            setTextt={setTextt}
            onClick={onClick}
          />
        </Modal>
        <Modal
          center
          open={openedModal}
          onClose={closeEdModal}
          className={styles?.unique}
        >
          <EditModal
            heading="Edit Note"
            ed={ed}
            setEd={setEd}
            submitEdit={submitEdit}
          />
        </Modal>
        {notes.length > 0 &&
          notes.map((curr, index) => (
            <Card
              obj={curr}
              key={index}
              deleteNode={deleteNodee}
              changePin1={changePin1}
              editNow={editNow}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
