import { useState, useEffect, useCallback, useMemo, MouseEvent, KeyboardEvent, useRef, useReducer } from 'react'

import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

interface User {
  id: number,
  username: string,
}

// useMemo 
type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}
const myNum: number = 35
// ----------------------------

function App() {
  // useState
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null); 

  // useRef
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  // useEffect
  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  // useCallback
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

  // useMemo
  const result = useMemo(() => fib(myNum), [myNum])

  return (
    <>
      <Heading title="Hello World" />
      <Section title={"Another Title"}>This is Children</Section>

      {/* useState */}
      <Counter setCount={setCount} count={count}/> 

      <List items={["🍵 Coffee", "🫓 Tacos", "💻 Code"]} render={(item: string)=> <span className='bold'>{item}</span>}/>

      {/* useEffect */}
      <button onClick={addTwo}>Add</button>

      {/* useMemo */}
      <p>{result}</p>
        
      {/* useRef */}
      <div>
        <input ref={inputRef} type="text" />
      </div>


    </>
  )
}

export default App
