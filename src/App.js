import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json';
import { toThrowErrorMatchingSnapshot } from 'jest-snapshot';

class App extends React.Component {
 
  state = {
    products: jsondata.data,
  };

showProducts = () => {
  return this.state.products.map(each => {
    return(
      <li>
        {each.name} - {each.price} - {each.category}
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

  return (
    <div className="App">
      <input
       name="search" 
       type="text"
       placeholder="search"
       onChange={this.search}/>
      {this.showProducts()}
    </div>
  );

  }
  
}

export default App;
