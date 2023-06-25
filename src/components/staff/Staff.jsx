import React from "react";
import "./staff.scss";
import { useSelector } from "react-redux";
import data from "../../mock.json";
import List from "../list/List";
import { removeOfficer } from "../../storage/action";

const Officers = () => {
  const officersLoaded = useSelector(state => state.officers);
  const officers = officersLoaded.map(officer => {
    if (officer.approved === "true") return {...officer, approved: "Одобрен"};
    else return {...officer, approved: "Не одобрен"};
  });
  
  const condition = ["id", "password", "clientId"];
  const { officersTh } = data;

  return (
    <List list={officers} title="Ответственные сотрудники" th={officersTh} remove={removeOfficer} condition={condition}/>
  )
}

export default Officers;