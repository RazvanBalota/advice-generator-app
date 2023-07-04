import pattern from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative bg-darkGrayBlue w-[600px] h-[400px] rounded-3xl flex flex-col items-center px-4 ">
        <span className=" text-primaryNeon text-xl uppercase tracking-widest pt-10 max-h-20 ">Advice</span>
        <p className="text-primaryLight text-2xl tracking-wider text-center h-40 pt-8">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, incidunt! Voluptatem reiciendis consequatur
          eaque rerum nobis accusantium non eligendi facilis!"
        </p>
        <img src={pattern} alt="pattern" className="pt-20" />
        <button className="bg-primaryNeon w-10 h-10 rounded-full flex justify-center items-center absolute -bottom-5 hover:shadow-lg hover:shadow-primaryNeon transition-shadow duration-150 cursor-pointer ">
          <img src={dice} alt="dice" className=" bg-primaryNeon w-5 h-5 " />
        </button>
      </div>
    </div>
  );
}

export default App;
