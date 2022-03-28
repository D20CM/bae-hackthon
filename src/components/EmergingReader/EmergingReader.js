import css from "./Emerging.module.css";
import { Link } from "react-router-dom";

export function EmergingReader() {
  function handleItem(e) {
    e.target.innerHTML = e.target.innerHTML + "✔️";
  }

  return (
    <>
      <h1 className={css.step1}>Emerging Reader🌱</h1>
      <ul className={css.list}>
        <li className={css.listitems}>
          <a
            href="https://medium.com/@EmEmbarty/31-of-the-best-and-most-famous-short-classic-poems-of-all-time-e445986e6df"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "inherit" }}
            onClick={(e) => {
              handleItem(e);
            }}
          >
            Click here, and read two of the poems on this page
          </a>
        </li>
        <li
          className={css.listitems}
          onClick={(e) => {
            handleItem(e);
          }}
        >
          Read the first 2 chapters of Harry Potter and the Philosopher's Stone
        </li>
        <li
          className={css.listitems}
          onClick={(e) => {
            handleItem(e);
          }}
        >
          Find and read a short story on a topic you are interested in
        </li>
        <li
          className={css.listitems}
          onClick={(e) => {
            handleItem(e);
          }}
        >
          Look up an author that interests you, and read 4 paragraphs about them
        </li>
        <li></li>
      </ul>
    </>
  );
}
