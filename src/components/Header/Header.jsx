import reactImg from '../../assets/logo_taurus_small.png'
import './Header.css'

const reactDescriptions = ['Welcome to Taurus Soft and Hard Solutions','We are Engineers, Technocrats Working at the intersection of Innovation and Technology!','taurus@taurusonline.net'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));

}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Taurus Solutions</h1>
      <p>
        {description}
      </p>
    </header>
  );
}