import ColorBox from "./features/ColorBox";
import TodoFeatures from "./features/Todo";
import "./styles.scss";
import NewTodo from "./features/NewTodo";

function App() {
  return (
    <div className="todo">
      <TodoFeatures />
      <ColorBox />
      <NewTodo />
    </div>
  );
}

export default App;
