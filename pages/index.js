import { useState } from "react"

const Home = () => {

  const [calcNums, setCalcNums] = useState([0,1,2,3,4,5,6,7,8,9,'+','-','*','/','=','c','(',')'])

  const [head, setHead] = useState(0)
  
  const increaseHead = () => {
    setHead(head+10)
  }
  const decreaseHead = () => {
    setHead(head-10)
  }

  const setCalc = (num) => {         
    if(head=='0'){
      setHead('')
    }
    setHead(`${head}`+`${num}`)                
    if(num == '='){alert('Equals:')}
    if(num == 'c'){setHead('')}
  }
  return(
    <div className=" bg-slate-900 h-screen">
      <div>
        
      <div className=" text-5xl w-full inline-block text-center p-2 h-20">{head}</div>
        <div className="grid grid-cols-3 max-w-[300px] m-auto text-center">
          
        {/* <div>
          <button onClick={increaseHead}>+</button>
          <button onClick={decreaseHead}>-</button>
        </div> */}
        {calcNums.map((num) => 
          <div className="hover:bg-slate-700 select-none cursor-pointer transition-all duration-300 py-4 m-1 rounded-md bg-gray-800" onClick={() => setCalc(num)}>{num}</div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Home