import { TodosList } from "./ToDoList";

export function Main({ items, onToggleAll, onRemoveItem,  onMarkedCompleted,onSetUpdat }) {
  function handleToggleAll(event) {
    onToggleAll(event.target.checked);
  
    
  }

 

  

  return (
    <section className="main">
      <input
        className="toggle-all"
        onChange={handleToggleAll}
        type="checkbox"
      />
      <TodosList items={items}
       onRemoveItem={onRemoveItem} 
       onMarkedCompleted={onMarkedCompleted}
       onSetUpdat={onSetUpdat}
      />
    </section>
  );
}
