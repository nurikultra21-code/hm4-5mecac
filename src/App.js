import Num from "./Num"
import Btn from "./Btn"
import {useState} from 'react'
import Users from "./Users";

function App() {
  const [count, setCount] = useState(0);
  const Plus = () => {
    
    if (count < 15) {
      setCount(count +1) 
    }
  }
  const Minus = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  
  const Reset = () => {
    setCount(0);
  };

  const PlusFive = () => {
  if (count + 5 > 15 ){
    setCount(15);
  }else{
    setCount(count + 5)
  }
  }

  const MinusFive = () => {
  if(count - 5 < 0){
    setCount(0);
  }else{
    setCount(count - 0)
  }
  }
  return (
    <div style = {{
      textAlign:"center"
    }}>
        <Num count={count}/>
        <Btn Plus={Plus} Minus={Minus} Reset={Reset} PlusFive={PlusFive} MinusFive={MinusFive}/> 
        <Users/>
         
        
    </div>
  );
}

export default App;
