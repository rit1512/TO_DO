import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './component/todoinput';
import ToDoItem from './component/toItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';
import ToList from './component/tolist'
class App extends Component {
  state={
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  }

  handleChange=(e)=>{
        this.setState({
      item:e.target.value
    })
    console.log(this.state.item);
    }

    handleSubmit=(e)=>{ 
    e.preventDefault();
  
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
console.log(newItem)
    const updatedItems=[...this.state.items,newItem]
this.setState({
  items:updatedItems,
  item:'',
  id:uuidv4(),
  editItem:false

})
  }
  ClearAll=()=>{
    this.setState({
      items:[]
    })
  }

  handleDelete=(id)=>{
    const filterItems=this.state.items.filter(item=>item.id!==id)
   
    this.setState({
      items:filterItems,
    
    })
   
  }

  handleEdit=(id)=>{
    const filterItems=this.state.items.filter(item=>item.id!==id)
    const selectedItems=this.state.items.find(item=>item.id==id)
    console.log(selectedItems)
    this.setState({
      items:filterItems,
      item:selectedItems.title,
    editItem:true,
  id:id})

  }
  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-xl-10 mx-auro col-md-8 mt-4">
          <h3 className="text-capitalize text-center">TODO Input</h3>
          <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} EditItem={this.state.editItem} />
          <ToList items={this.state.items}
          ClearAll={this.ClearAll}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
        </div>
      </div>
   
    </div>
  );

}
}

export default App;
