import React from "react";
import "./main.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import FormLogin from "../loginForm/LoginForm";
import FormNewCase from "../reportForm/ReportForm";
import Cases from "../cases/Cases";
import CaseDetail from "../caseDetail/caseDetail";
import Officers from "../staff/Staff";
import OfficerDetail from "../staffDetail/StaffDetail";
import { useSelector } from "react-redux";
import Error from "../error/error";
import thief from "../../assets/img_main.svg"

const Main = () => {
  const isLogin = useSelector(state => state.isLogin);
  return (
    <main className="main">
      <Routes>
        <Route exact path={"/"} element={
          <div className="main-page">
            <div className="text-content">
              <h1 className="title">Утерян велосипед?</h1>
              <h2 className="subtitle">Скорее сообщите нам!</h2>
              <p className="text">
                В последнее время участились случаи кражи велосипедов нашего велопроката "Bikes 21". 
                Мы начинаем вести учет этих случаев и отслеживать прогресс.
                Пожалуйста, сообщените нам об известных вам случаях, мы разберемся с этим.
              </p>
              <button className="main-btn"><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="new-case">Сообщить о краже</NavLink></button>
              
            </div>
            <img src={thief} alt="thief" className="img" />            
          </div>
          
        } />
        <Route path={"/login"} element={<FormLogin />} />
        <Route path={"/new-case"} element={<FormNewCase />} />
        <Route path={"/cases"} element={isLogin ? <Cases /> : <Error />} />
        <Route path={"/cases/:caseId"} element={isLogin ? <CaseDetail /> : <Error />} />
        <Route path={"/officers"} element={isLogin ? <Officers /> : <Error />} />
        <Route path={"/officers/:officerId"} element={isLogin ? <OfficerDetail /> : <Error />} />  
      </Routes>
    </main>
  )
}

export default Main;