import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
    const [list, setlist] = useState(['Test 1', 'Test 2', 'Test 3']);
    const [text, setText] = useState('');

    function addItem() {
        console.log('adding');
        
        let copy = [...list];
        copy.push('text');
        setList(copy);
    }

    function handleTextChange(e) {
        const val = e.target.value;
        setText(val);
    }
    function deleteAll() {
        setList([]);
    }

    return (
    <div className="shopping-list page">
        <h3>Shopping List</h3>

    <div className="box">
        <input onChange={handleTextChange} type="text" />
        <button onClick={addItem} className="btn btn-sm btn-primary" >
            Add</button>
        
        <button onClick={deleteAll} className="btn btn-sm btn-danger">
            Clear</button>
    </div>

        <ul>
            {list.map( (x) => (
            <li>{x}</li>
        ))}
        </ul>
    </div>

);
}

export default ShoppingList;
