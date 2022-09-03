import React from "react";
import styles from "./NavBar.module.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const NavBar = () => {
  return (
    <div className={styles?.outer}>
      <div className={styles.left}>
        <AppRegistrationIcon sx={{ color: "#f7a278", fontSize: 75 }} />
      </div>
      <div className={styles.title}>Jot Down!</div>
      <div className={styles.left}>
        <AppRegistrationIcon sx={{ color: "#f7a278", fontSize: 75 }} />
      </div>
    </div>
  );
};

export default NavBar;
