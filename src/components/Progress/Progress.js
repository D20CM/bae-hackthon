import css from "./Progress.module.css";
import { Link } from "react-router-dom";

export function Progress() {
  return (
    <>
      <h1 className={css.title}>Your Reading Journey!</h1>
      <br></br>
      <h2 className={css.step5}>Expert Reader π</h2>
      <br></br>
      <h2 className={css.step4}>Fluent Reader π£οΈ</h2>
      <br></br>
      <h2 className={css.step3}>Decoding Reader π</h2>
      <br></br>
      <h2 className={css.step2}>Novice Reader π</h2>
      <br></br>
      <Link to="/emergingreader" style={{ textDecoration: "inherit" }}>
        <h2 className={css.step1}>Emerging Readerπ±</h2>
      </Link>
    </>
  );
}
