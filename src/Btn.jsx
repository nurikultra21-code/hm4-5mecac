import React from 'react'

const Btn = ({setCount, coun, Plus, Minus, Reset,PlusFive, MinusFive }) => {
  return (
    <div>
      <button onClick={Plus}>+</button>
      <button onClick={Minus}>-</button>
      <button onClick={Reset}>reset</button>

      <button onClick={PlusFive}>+5</button>
      <button onClick={MinusFive}>-5</button>
    </div>
  )
}

export default Btn
