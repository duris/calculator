import { useState } from "react"

const Home = () => {

  const [calcNums, setCalcNums] = useState([0,1,2,3,4,5,6,7,8,9,'+','-','*','/','=','c','.'])
  const [calcStr, setCalcStr] = useState('')
  const [entryCount, setEntryCount] = useState(0)
  const [head, setHead] = useState(0)

  const [calculation, setCalculation] = useState(0)
  const [calculating, setCalculating] = useState(false)
  
  const increaseHead = () => {
    setHead(head+10)
  }
  const decreaseHead = () => {
    setHead(head-10)
  }

  let arr = []

  const [firstVal, setFirstVal] = useState(null)
  const [secondVal, setSecondVal] = useState(null)



  const setCalc = (num) => {   
    
    if(typeof(num) == 'number'){
      if(!calculating){
        setCalculation(`${calculation}${num}`)
        setSecondVal(`${calculation}${num}`)
        return
      } else {
        
        setCalculation(`${calculation}${num}`)
        setFirstVal(`${calculation}${num}`)
        return
      }   
    }
 
    

    switch (num) {
      case '+':
        if(calculating){
          console.log('Equals')  
          let val = Number(firstVal) + Number(secondVal)
          console.log(val)    
          setCalculation(val)
          setFirstVal(null)          
          setSecondVal(null)  
          setCalculating(false)
        }else{
          setCalculation('')
          console.log('Adding')         
          setCalculating(true)
        }

        break;
      case '-':
        console.log('Subtracting')
        break;
      case '*':
        console.log('Multiplying')
        break;
      case '/':
        console.log('Dividing')
        break;
      case '=':
        console.log('Equals')
        break;
      case 'c':
        // console.log('Clears')
        setCalculation(0)
        break;
      case '.':
        console.log('Insert Decimal')
        break;
      default:
        break;
    }

    // if(num=='*'||num=='/'||num=='+'||num=='-'){
    //   // setCalcArr(calcArr + head)
            
    //   setHead('')
    //   // console.log(calcArr)
    // }else {
    //   setHead(`${head}`+`${num}`)   
    //   setEntryCount(entryCount+1)
    // }
    // console.log(calcStr)

    // if(num == '='){
    //   let st = calcStr.split('+')
    //   let val = Number(st[0]) + Number(st[1])
    //   setHead(val)
    //   setEntryCount(0)
      
    // }
    // if(num == 'c'){setHead(''), setCalcStr('')}
  }
  return(
    <div className=" bg-blue-900 h-screen">
      <div>
        
      <div className=" text-5xl w-full inline-block text-center p-2 h-20">{calculation}</div>
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