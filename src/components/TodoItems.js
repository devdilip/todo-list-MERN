import React, { Component } from "react";

const TodoList = (props) => {
    const todosItem = props.todos.map(todo => {
        const clsName = todo.chk ? "checked-todo" : "unchecked-todo";
        return (
            <div className={`todo-item ` + clsName} key={todo.title} >
                <input type="checkbox" onChange={(e) => {props.onChecked(e.target.checked, todo._id)}} />
                <strong className={clsName}> {todo.title} </strong>
                <a className="delete-button" onClick={() => {props.onDelete(todo._id)}}>Delete</a>
            </div>
        );
    })
    return (
        <div className="todos-list">
            {todosItem}
        </div>
    )
}
export default TodoList