import React from 'react'
class App extends React.Component {
  // eslint-disable-next-line react/no-direct-mutation-state
  constructor(){
    super();
  this.state = {
    nom:'',
    myArray: ['Jack', 'Mary', 'John', 'Krish', 'Navin']

  }

}
 addUser=(event)=>{
  let uparray=  this.state.myArray;
 uparray.push(this.state.nom)
  this.setState({ myArray:uparray})
  this.setState({nom:''})
event.preventDefault();
}
render()
{
  return (
    
  <div className="container">
    <form onSubmit={this.addUser}>

      nom<input required value={this.state.nom}
          onChange={(e) => this.setState({ nom: e.target.value })}></input>
          <button type="submit">ajouter</button>
    </form>
  <h1> Liste des candidats </h1>
  {this.state.myArray.map(name => (
  <li>
  {name}
  </li>
  ))}
  </div>
  );
  }
}
  export default App;