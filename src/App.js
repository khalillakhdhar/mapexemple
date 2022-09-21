function App() {
  // eslint-disable-next-line react/no-direct-mutation-state
 
  const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];
  return (
  <div className="container">
   
  <h1> Liste des candidats </h1>
  {myArray.map(name => (
  <li>
  {name}
  </li>
  ))}
  </div>
  );
  }
  export default App;