import { useState, useEffect } from 'react' 
function Home() {
  // # state hook
  const [count, setCount] = useState( 0 )


  // # effect hook 
  useEffect( () => {
    setTimeout( () => {
      document.title = count
    }, 2000 )
  } )

  return <div>
    Count: { count }
    <br/>
    <br/>
    <button onClick={ () => setCount( count + 1 ) }>Increment</button>
  </div>
}

export default Home