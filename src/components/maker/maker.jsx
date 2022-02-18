import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
