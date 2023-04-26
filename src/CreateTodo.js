import React, { useState, useRef, useEffect } from 'react';

const CreateTodo = () => {

    const currFocus = useRef(null);

    let [inputText, setText] = useState('');
    let [items, setItems] = useState([]);

    const addTodo = () => {
        if (!inputText) {
            alert('Enter Todo');
        } else {
            setItems([...items, inputText])
            setText('');
        }
    }

    let inputHandler = (e) => {
        setText(e.target.value);
    }
    useEffect(() => {
        currFocus.current.focus();
    }, [addTodo]);

    const deleteTodo = (i) => {
        let newItems = items.filter((el, ix) => {
            return ix !== i
        });
        setItems(newItems);


    }
    const clearTodo = () => {
        setItems([]);
    }
    const color = {
        color: 'red',
        cursor: 'pointer'
    };
    return (
        <>
            <form>
                <input className='input-style' ref={currFocus} placeholder='Write here...' type="text" name="todo" value={inputText} onChange={inputHandler}></input>
                <button className='btn' type="button" onClick={addTodo}>+ Add</button>
            </form>
            <h2> Show List</h2>
            <div className='listItems'>
                {
                    items.map((item, ind) => {
                        return (
                            <div className='item' key={ind}>
                                <h3> {item} <span className='deleteItem' onClick={() => { deleteTodo(ind) }} style={color} > Delete</span></h3>
                            </div>)
                    })
                }



            </div>
            <button className='btn' type="button" onClick={clearTodo}> Clear List</button>
        </>
    )
}

export default CreateTodo