import logo from '../../images/logo.svg';

export default function Header() {
  return(
    <header className="header">
      <img className="logo" alt="Логотип Mesto Russia" src={logo} />
    </header>
  )
}
