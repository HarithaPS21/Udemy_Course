import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDesriptions = ["Fundamental", "Core", "Crucial"];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = reactDesriptions[generateRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
