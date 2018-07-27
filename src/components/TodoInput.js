import React from 'react'

const TodoInput = (props) => {
    const handleSubmit = (event) => {
        if (event.key === "Enter") {
            if (event.target.value !== "" && event.target.value.trim()) {
                props.todoInputValue(event.target.value);
                event.target.value = "";
            } else {
                alert("enter todo here....");
            }
        }
    }
    return (
        <input onKeyPress={handleSubmit} placeholder="Enter todo here.." type="text" />
    )
}
export default TodoInput