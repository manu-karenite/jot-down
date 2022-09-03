import React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Paginationn = (props) => {
  const handleChange = (event, value) => {
    props?.setPg(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: "20px",
      }}
    >
      <Pagination
        count={Math.ceil(props?.totalPgs / 6)}
        page={props?.pg}
        onChange={handleChange}
      />
    </div>
  );
};

export default Paginationn;
