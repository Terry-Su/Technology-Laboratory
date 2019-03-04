import { useState, useEffect } from 'react' 

function useCustom() {
  const [ count, setCount ] = useState( 0 )

  return {
    str: `Count: ${ count }`,
    add: num => setCount( count + num )
  }
}

function Home() {
  const { str, add } = useCustom( )
  
  return <div>
    { str }
    <br />
    <br />
    <button onClick={ () => add( 1 ) }>Add</button>
  </div>
}

export default Home