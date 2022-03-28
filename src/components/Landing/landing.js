import React from "react";
import styles from "./landing.module.css";
import background from "../../happy-readers.jpeg";

const Landing = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>LearnIT</h1>
        <h1>Login</h1>
      </div>
      <img src={background} alt="background image" />
      <div className={styles.slogan}>
        <p>
          A platform where you can access all recources to suit your learing
          needs.{" "}
        </p>
        <p>Benefits: Start from where you left with the progress tracker </p>
      </div>

      <button className={styles.signup}> Sign up to begin your journey</button>
    </div>
  );
};

export default Landing;
