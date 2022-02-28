import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Jongbo",
      company: "GP",
      theme: "light",
      title: "Software Engineer",
      email: "jongbo.lee85@gmail.com",
      message: "hey",
      filName: "jongbo",
      fileURL: "jongbo.png",
    },
    2: {
      id: "2",
      name: "YJ",
      company: "Davista",
      theme: "colorful",
      title: "AT",
      email: "yj.kim@gmail.com",
      message: "calculate somthing",
      filName: "yj",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Sidney",
      company: "SUP",
      theme: "dark",
      title: "SUP instructor",
      email: "sidney@gmail.com",
      message: "supper dupper",
      filName: "sidney",
      fileURL: null,
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
