import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import { rememberPath } from "../../storage/action";
import { signOut } from "../../storage/action";
import logo from "../../assets/logo.svg"


const Header = () => {
  const isLogin = useSelector(state => state.isLogin);
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(rememberPath(window.location.pathname));
    if (isLogin) dispath(signOut());
  }

  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li><NavLink className={({ isActive }) =>(isActive ? "item active" : "item")} to="/"><img className="logo" src={logo} alt="logo" /></NavLink></li>
          
          {isLogin && (
            <>
              <li><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="cases">Все сообщения о кражаж</NavLink></li>
              <li><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="officers">Ответственные сотрудники</NavLink></li>
            </>
          )}
        </ul>
      </nav>
      <Link to={isLogin ? "/": "/login"}>
        <button className="btn" onClick={handleClick}>{isLogin ? "Выйти" : "Войти"}</button>
      </Link>
    </header>
  );
};

export default Header;
