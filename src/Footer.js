

export function Footer({ onClearCompleted, itemLeftCount }) {
    return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{ itemLeftCount }</strong> items left</span>
          <button
              onClick={onClearCompleted}
              className="clear-completed">Clear completed
          </button>
        </footer>
    );
  }