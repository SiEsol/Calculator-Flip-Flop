'use client'

import { useState } from "react";

function CalculatorFlipFlop() {
  const [type, setType] = useState("");
  const [set, setSet] = useState(""); 
  const [reset, setReset] = useState("");
  const [q, setQ] = useState("");
  const [qNot, setQNot] = useState("");

  const calculate = () => {

    let outputQ, outputQNot;
  
    if (type === "NAND") {
      if (set === "1" && reset === "1") {
        outputQ = 1;
        outputQNot = 1; 
      }
      else if (set === "0" && reset === "1") {
        outputQ = 1;
        outputQNot = 0;
      }
      else if (set === "1" && reset === "0") {
        outputQ = 0;
        outputQNot = 1; 
      }
      else {
        outputQ = "X";  
        outputQNot = "X";
      }
    }
  
    else if (type === "NOR") {
      if (set === "1" && reset === "1") {
        outputQ = "X";
        outputQNot = "X";
      }
      else if (set === "0" && reset === "1") {
        outputQ = 0; 
        outputQNot = 1;
      }
      else if (set === "1" && reset === "0") {
        outputQ = 1;
        outputQNot = 0;
      }
      else {
        outputQ = 0;  
        outputQNot = 0;
      }
    }
  
    setQ(String(outputQ));
    setQNot(String(outputQNot)); 
  }
  
  const validateInput = (value: string) => {
    if(value.length === 0 || (value === "0" || value === "1")) {
      return true;
    }
  
    return false; 
  }

  return (
    <div className="h-screen bg-white justify-center flex items-center">
        <div className="flex justify-center h-[600px] w-[600px] shadow-[0_0_15px_-4px_rgba(0,0,0,0.25)] rounded-[40px]">
          <div className="flex flex-col justify-center">
              <div className="flex justify-center items-center flex-col">
                <p className="text-black font-bold font-['FONTSPRING DEMO - Greycliff CF'] text-[30px]">Hello!</p>
                <p className="text-black font-normal font-['DM Sans'] text-[15px] text-slate-400">Calculator Flip-Flop</p>
              </div>
              <p className="text-black w-[80px] font-['DM Sans'] mt-[30px]">Menu</p>
              <select className="flex justify-center items-center text-slate-700 italic text-[15px] w-96 outline-none mb-[30px] h-[40px] shadow-[inset_0_0_3px_0px_rgba(0,0,0,0.25)] rounded-xl px-[10px] bg-gray-50" onChange={(e) => setType(e.target.value)}>
                  <option value="" disabled selected hidden>Select one..</option>
                  <option value="NAND">NAND</option>
                  <option value="NOR">NOR</option>
              </select>
              <div className="flex flex-col my-[5px]">
                <p className="text-black w-[80px] font-['DM Sans']">Set</p>
                <input className="text-black w-[100%] h-[40px] text-[14px] bg-gray-50 rounded-xl shadow-[inset_0_0_3px_0px_rgba(0,0,0,0.25)] outline-none placeholder:italic pl-[10px]"
                placeholder="Masukkan angka 1 atau 0"
                    value={set}
                    onChange={e => {
                    if(validateInput(e.target.value)) { 
                        setSet(e.target.value)
                    }
                    }}  
                />
              </div>
              <div className="flex flex-col my-[5px]">
                <p className="text-black font-['DM Sans'] w-[80px]">Reset</p>
                <input className="text-black w-[100%] h-[40px] text-[14px] bg-gray-50 rounded-xl shadow-[inset_0_0_3px_0px_rgba(0,0,0,0.25)] outline-none placeholder:italic pl-[10px]"
                placeholder="Masukkan angka 1 atau 0"
                    value={reset}
                    onChange={e => {
                    if(validateInput(e.target.value)) {
                        setReset(e.target.value)  
                    } 
                    }}    
                />
              </div>
              <div className="flex items-center justify-center my-[10px]">
                <button className="hover:bg-sky-400 hover:duration-300 ease-in-out duration-300 flex text-white font-semibold font-['FONTSPRING DEMO - Greycliff CF Heavy'] items-center justify-center bg-sky-600 rounded-[30px] w-[100%] h-[50px]" onClick={calculate}>Calculate!</button> 
              </div>
              <p className="text-slate-700 mt-[20px]">Result</p>
              <div className="text-black flex flex-row justify-between mt-[20px] text-[25px] font-['FONTSPRING DEMO - Greycliff CF Heavy'] font-bold text-slate-700 justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                  Q = <div className="mx-[15px] w-[100px] h-[40px] shadow-[inset_0_0_3px_0px_rgba(0,0,0,0.25)] rounded-xl text-[15px] justify-center items-center flex font-semibold">{q}</div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  Q` = <div className="mx-[15px] w-[100px] h-[40px] shadow-[inset_0_0_3px_0px_rgba(0,0,0,0.25)] rounded-xl text-[15px] justify-center items-center flex font-semibold">{qNot}</div>
                </div>
              </div>
              
          </div>
          </div>   
    </div>
  );
}

export default CalculatorFlipFlop;
