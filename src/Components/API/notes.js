import axios from "axios";

const addNote = async (data) => {
  const result = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/add-note`,
    data: data,
  });
  return result;
};
const getNotes = async (pg) => {
  const result = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/get-notes/${pg}`,
  });
  return result;
};
const editNote = async (data) => {
  const result = await axios({
    method: "PUT",
    url: `${process.env.REACT_APP_BACKEND_URL}/edit-note`,
    data: data,
  });
  return result;
};
const deleteNode = async (id) => {
  const result = await axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_BACKEND_URL}/delete-note/${id}`,
  });
  return result;
};
const changePin = async (id, status) => {
  const result = await axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_BACKEND_URL}/change-pin/${id}`,
    data: { status: status },
  });
  return result;
};
export { addNote, getNotes, editNote, deleteNode, changePin };
