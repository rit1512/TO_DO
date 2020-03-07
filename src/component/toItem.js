import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit}=this.props;
        console.log(title);
        return (
       
            <div className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6> 
                <div className="todo-icon">
                <button className="btn" onClick={handleEdit}> <span className="mx-2 text-success">Edit</span></button>
                <button className="btn" onClick={handleDelete}> <span className="mx-2 text-danger">Delete</span></button>
                </div> 
            
            </div>
        )
    }
}
