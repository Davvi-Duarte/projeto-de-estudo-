// import { useState } from "react"; // forma correta
const { useState } = React; // forma com o codepen.io

const Topic = ({ title, count }) => {
  const [votes, setVotes] = useState(count);

  const increaseCount = () => {
    setVotes(votes + 1);
    console.log(`increase count: ${votes}`);
  }

  return <div>{title} ({votes}) <button onClick={increaseCount}>+1</button></div>
}

const App = () => {
  return (
    <>
      <h1>Vota Tópico</h1>
      <Topic title="PHP" count={1} />
      <Topic title="C#" count={2} />
      <Topic title="JavaScript" count={10} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
