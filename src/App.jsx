import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState (0);
  const [clickPower, setClickPower] = useState (1);
  const [passiveIncome, setPassiveIcome] = useState (0);

  const upgrades = [
    { id: 1, name: "Обычный жмяк", deskriptions: "+1 бананчик за клик", price: 10, click: 1},
    { id: 2, name: "Сильный жмяк", deskriptions: "+5 бананчиков за клик", price: 50, click: 5},
    { id: 3, name: "Супер-сильный жмяк", deskriptions: "+10 бананчиков за клик", price: 100, click: 10},
    { id: 4, name: "", deskriptions: "+10 за клик", price: 100, click: 10},
  ]
}
