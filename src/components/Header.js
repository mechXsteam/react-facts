const url = "https://ionicframework.com/docs/icons/logo-react-icon.png";

export default function Header() {
  return (
    <nav className="nav">
      <img src={url} alt="react-logo" className="nav--icon" />
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--title">React project - 1</h4>
    </nav>
  );
}
