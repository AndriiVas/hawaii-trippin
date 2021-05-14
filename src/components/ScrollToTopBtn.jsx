import React from "react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <FaArrowCircleUp
      style={{
        position: "fixed",
        width: "100%",
        left: "46%",
        bottom: "40px",
        fontSize: "3rem",
        zIndex: 1,
        cursor: "pointer",
        color: "hsl(210, 100%, 60%)",
        display: visible ? "inline" : "none",
      }}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopBtn;
