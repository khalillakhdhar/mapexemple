import React from "react";
class App extends React.Component {
  // eslint-disable-next-line react/no-direct-mutation-state
 constructor()
 {
  super();
this.state={
  nom:'',
  myArray:['Jack', 'Mary', 'John', 'Krish', 'Navin']
}

 }
 addUser=(event)=>{
  let uparray=this.state.myArray;
  uparray.push(this.state.nom);
  this.setState({
  myArray:uparray,
  nom:'',
  });
  event.preventDefault();
}
delete= (x)=>{
  if(window.confirm("vous voulez supprimez cet élément?"))
  {
  let uparray=this.state.myArray;
  uparray.splice(x,1);
  this.setState({
    myArray:uparray,
    nom:'',
    });
    console.log("element of index "+x+"deleted successfully")
  }
}
 render(){
  return (
  <div className="container">
   <form onSubmit={this.addUser}>
    nom:<input required value={this.state.nom} onChange={(e)=>this.setState({nom:e.target.value})}></input>
    <button type="submit">Ajouter</button>
   </form>
  <h1> Liste des candidats </h1>
  {this.state.myArray.map((name,index) => (
  <li>
  {name} &nbsp; <button onClick={()=>this.delete(index)} className="btn btn-link btn-danger">x</button>
  <br></br>
  </li>
  ))}
  </div>
  );
  }
}
  export default App;