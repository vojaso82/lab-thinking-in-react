import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json';
import { toThrowErrorMatchingSnapshot } from 'jest-snapshot';

class App extends React.Component {
 
  state = {
    products: jsondata.data,
    showAll: true,
  };

showProducts = () => {
  return this.state.products.map(eachProduct => {
    return(
      <li hidden={this.state.showAll && !eachProduct.stocked}>
       <span className={!eachProduct.stocked && "notInStock"}> {eachProduct.name} </span> 
        - {eachProduct.price} - {eachProduct.category} 
        </li>
    );
  });
};

search = (e) => {
  console.log(e.target.value);
  let filteredProduct = jsondata.data.filter((eachData) => {
    return eachData.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  this.setState ({products: filteredProduct});
};
 
render(){
   console.log(this.state)
  return (
    <div className="App">
      <input name="search" type="text" placeholder="search" onChange={this.search}></input>
      <input name="showInStockOnly" 
      type="checkBox" 
      checked={this.state.showAll} 
      onChange={() => this.setState({showAll: !this.state.showAll})}></input>
      <label>Only show products on Stock</label>
      {this.showProducts()}
    </div>
  );
  }
  
}

export default App;
