import { useState } from 'react'
import React from 'react'
import InputBox from './componets/Input box.jsx'
import UsecurrencyInfo from './hooks/usecurrency.js';
import { CiBadgeDollar } from "react-icons/ci";
import { MdOutlineSwapVert } from "react-icons/md";


function App() {

  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0)

  //using custom hook (Hooks)
  

  const currencyinfo = UsecurrencyInfo(from)
 

  //options array 
  let options = Object.keys(currencyinfo);



  //swap button

  const swap = () => {
    setfrom(to);
    setto(from);

    setconvertedamount(amount);  
    setamount(convertedamount);


  }

  const convert = () => {
    setconvertedamount((currencyinfo[to]) * amount);



  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-900"
        style={{
            
        }}
    >

            
        
        <div className="w-full">
            <h1 className='text-white text-3xl mx-auto w-screen  text-center  p-10 flex justify-center items-center  md:gap-4 font-semibold '>Currrency Converter <CiBadgeDollar size={44} /></h1>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 hover:shadow-lg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();

                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoptions={options}    
                            onamountchange={(amount)=>setamount(amount)}
                            selectcurrency={from}    
                            oncurrencychange={(e)=>setfrom(e)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                           <MdOutlineSwapVert size={24} />
                            
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            selectcurrency={to}
                            amount={convertedamount}
                            onamountchange={(currency)=>{
                                setamount(currency)
                            }}  
                            currencyoptions={options}
                            oncurrencychange={(e)=>setto(e)}
                            
                            
                        /> 
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow hover:shadow-sm hover:shadow-white">
                        Convert {from.toUpperCase()} to {to.toUpperCase(    )}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App




