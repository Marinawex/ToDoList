import { useState } from "react";

export function TodosList({ items,onRemoveItem,onMarkedCompleted,onSetUpdat }) {
  const [editing,setEditing] = useState(false);

  const handleDoubleClick = () => {
   setEditing(!editing)
  };
  const handleSaveEdit = (event) => {
    if(event.key === 'Enter'){
      
      setEditing(!editing)
    }
  }
 

    return (
        <ul className="todo-list">
          { items.map( item => (
              <li className={`${item.completed ? 'completed' : ''}  ${editing ? 'editing': ''}`} key={item.id}>
                <div className="view"
                onDoubleClick={handleDoubleClick}
                
                >
                
                  <input className="toggle"
                         type="checkbox"
                         onChange={(event) => onMarkedCompleted(item)}
                         checked={item.completed}
                         

                         />
                  <label>{item.title}</label>
                  <button className="destroy"
                  onClick={()=>onRemoveItem(item)}
                  />
                </div>
                <input className="edit"
                value={item.title}
                onChange={(event)=> onSetUpdat(event.target.value ,item.id)}
                onKeyUp={handleSaveEdit}/>
              </li>
          ))}
        </ul>
    );
  }