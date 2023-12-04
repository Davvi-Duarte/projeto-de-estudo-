// import { useState } from "react"; // forma correta
const { useState } = React; // forma com o codepen.io

const Topic = () => {
  const [votes, setVotes] = useState(0);
 
  const increaseCount = () => {
    setVotes(votes + 1);
    console.log(`increase count: ${votes}`);
  }
  
  return <div>PHP ({votes}) <button onClick={increaseCount}>+1</button></div>
}

const App = () => {
  return (
    <>
      <h1>Vota Tópico</h1>
      <Topic />
      <Topic />
      <Topic />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));