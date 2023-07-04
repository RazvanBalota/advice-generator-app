import { useState } from "react";
import pattern from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data.slip);
        setAdvice(response.data.slip);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="relative bg-darkGrayBlue w-[400px] h-[400px] lg:w-[450px] lg:h-[300px] rounded-3xl flex flex-col items-center px-6 ">
        <span className=" text-primaryNeon text-sm uppercase tracking-widest pt-10 max-h-20 ">Advice #{advice.id}</span>
        <p className="text-primaryLight text-xl tracking-wider text-center pt-6 max-h-48 lg:max-h-36">
          {advice.advice}
        </p>
        <img src={pattern} alt="pattern" />
        <button
          onClick={getAdvice}
          className="bg-primaryNeon w-10 h-10 rounded-full flex justify-center items-center absolute -bottom-5 hover:shadow-lg hover:shadow-primaryNeon transition-shadow duration-150 cursor-pointer ">
          <img src={dice} alt="dice" className=" bg-primaryNeon w-5 h-5 " />
        </button>
      </div>
    </div>
  );
}

export default App;
