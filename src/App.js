import ColorBox from "./features/ColorBox";
import TodoFeatures from "./features/Todo";
import "./styles.scss";
import NewTodo from "./features/NewTodo";
import Post from "./features/Post";

function App() {
  return (
    <div className="todo">
      <TodoFeatures />
      <ColorBox />
      <NewTodo />
      <Post />
    </div>
  );
}

export default App;
