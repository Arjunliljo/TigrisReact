import "./index.css";

function Header() {
  return (
    <header>
      <div className="container">
        <a className="logo-link" href="#">
          <span>Tigris</span>
        </a>
        <button className="menu-button">
          <span className="material-symbols-outlined">pets</span>
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
