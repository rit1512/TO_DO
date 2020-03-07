import React, { Component } from 'react'
import ToDoItem from './toItem';

 class ToDoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,EditItem}=this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div >
                        <input type="text" className="form-control text-capitalize" placeholder="add ToDo Item" value={item} onChange={handleChange}/>
  
                    <button type="submit" className={EditItem?"form-control btn btn-success mt-3":"form-control btn btn-primary mt-3"}>{EditItem?'Edit Item':'Add Item'}</button>
              </div>
                </form>
            </div>
        )
    }
}

export default ToDoInput; 