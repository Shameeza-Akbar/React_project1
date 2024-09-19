import homePgImg from "../assets/react-core-concepts.png"
import "./Header.css";
const arr=["Fundamental", "Core", "Crucial"];
function getRamdomIndex(){
  return Math.floor(Math.random()*arr.length);
}
export default function Head(){
  const value=arr[getRamdomIndex()];
  return(<header>
    <img src={homePgImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {value} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}