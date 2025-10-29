import logo from "../../assets/logo.png";
// import "./Header.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header id={styles.header}>
      <img src={logo} alt="A canvas" className={styles.img} />
      <h1 className={styles.h1}>ReactArt</h1>
      <p className={styles.para}>A community of artists and art-lovers.</p>
    </header>
  );
}
