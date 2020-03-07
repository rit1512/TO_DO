import React, { Component } from 'react'
import ToDoItem from './toItem'

class ToList extends Component {
    render() {
        const {items,ClearAll,handleDelete,handleEdit}=this.props
        return (
           
            <div>
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">ToDo lISTS</h3>
                 {
                     items.map(item=>{
                        return(
                            <ToDoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)}  handleEdit={()=>handleEdit(item.id)}/>
                        
                            )})
                 }
             
                
                <button className="btn btn-danger mt-5 text-capitalize btn-block" onClick={ClearAll}>Clear list</button>
            </ul>
            </div>
        )
    }
}

export default ToList;