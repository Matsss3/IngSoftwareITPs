import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!inputValue.trim()) return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, inputValue]);
    }
    setInputValue('');
  };

  const handleEdit = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>React CRUD App</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn-add" onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {items.length > 0 && (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item-row">
              <span>{item}</span>
              <div className="actions">
                <button className="btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;