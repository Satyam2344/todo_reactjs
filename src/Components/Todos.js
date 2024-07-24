import React, { useState } from 'react';
import './Css/Todos.css'

const Todos = () => {
    const [val, setVal] = useState("");
    const [data, setData] = useState([]);

    const getInput = (event) => {
        setVal(event.target.value);
    }
    const getData = () => {
        /* The code `let store = [...data, val]; setData(store)` is creating a new array `store` by
        spreading the elements of the existing `data` array and adding the value of `val` to it.
        This new array `store` is then set as the new state of the `data` using `setData(store)`.
        This process effectively adds the new value entered in the input field to the existing list
        of tasks stored in the `data` state. */
        if (val !== "") {
            let store = [...data, val];
            setData(store)
            setVal("")
        }else{
            alert("enter task then add!!")
        }
    }
    const deleteTask = (index) => {
        let filterData = data.filter((curElem, id) => {
            return id !== index
        })
        setData(filterData);
    }

    return (
        <>
            <div className='container'>
                <div>
                    <h1>Todo List React JS</h1>
                    <input type="text" placeholder='enter taks' value={val} onChange={getInput} className='inputField' />
                    <button className='addingBtn' onClick={getData}>Add</button>
                </div>

                {data.map((curVal, index) => {
                    return (
                        <>
                            <div className='taskData'>
                                <p>{curVal}</p>
                                <button id="deleteIcon" onClick={() => deleteTask(index)}>delete</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Todos