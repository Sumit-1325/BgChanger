import { useState } from "react";
// import './App.css'
// import './index.css'
import Button from "./Components/button";

function App() {
  const [changeBgColor, setChangeBgColor] = useState("olive");

  return (
    <>
      <div
        className=" w-[100vw] min-h-screen duration-200 flex justify-center items-bottom "
        style={{ backgroundColor: changeBgColor }}
      >
        <div className="fixed bottom-10 inset-x-0 flex justify-center px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-lg w-[70vw] bg-white px-3 py-3 rounded-2xl">
            <Button colorName="olive" onClick={setChangeBgColor} />
            <Button colorName="green" onClick={setChangeBgColor} />
            <Button colorName="red" onClick={setChangeBgColor} />
            <Button colorName="blue" onClick={setChangeBgColor} />
            <Button colorName="grey" onClick={setChangeBgColor} />
            <Button colorName="yellow" onClick={setChangeBgColor} />
            <Button colorName="violet" onClick={setChangeBgColor} />
            <Button colorName="pink" onClick={setChangeBgColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
