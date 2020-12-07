import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from "react"

const Header = () => (
    <header>
        <div className="container">
          <h2>早田<span className="container__logo">'S</span> Portfolio</h2>
          <Dropdown/>
      </div>
    </header>
)


const Dropdown = () => {
  const[isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  React.useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);
  const handleClick = (text) => () => {
    scrollTo(text)
  };
  return (
    <div className="menu-container" 
      onClick={() => {
        setIsOpenMenu(!isOpenMenu)}
      }
      ref={menuRef}
      onBlur={() => setIsOpenMenu(false)}
      tabIndex={0}>
      <div className="menuButton">
        Menu
      </div>
      <ul className="menu-smart" hidden={!isOpenMenu}>
        <li className="menu-smart__item" onClick={handleClick('.link-about')}>About</li>
        <li className="menu-smart__item" onClick={handleClick(".link-skills")}>Skills</li>
        <li className="menu-smart__item" onClick={handleClick(".link-otherskill")}>Other Skill</li>
        <li className="menu-smart__item menu--margin" onClick={handleClick("c")}>Contact</li>
      </ul>
      <ul className="menu-pc">
        <li className="menu-pc__item" onClick={handleClick('.link-about')}>About</li>
        <li className="menu-pc__item" onClick={handleClick(".link-skills")}>Skills</li>
        <li className="menu-pc__item" onClick={handleClick(".link-otherskill")}>Other Skill</li>
        <li className="menu-pc__item " onClick={handleClick(".link-contact")}>Contact</li>
      </ul>
    </div>
  );
};




export default Header
