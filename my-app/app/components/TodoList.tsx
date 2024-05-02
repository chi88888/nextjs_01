import { Todo } from "../../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    // 定义一个类型为Todo的数组
    todos: Array<Todo>;
    // 定义一个函数，用于切换Todo的完成状态
    toggleTodo: (id: number) => void;
    // 定义一个函数，用于删除Todo
    deleteTodo: (id: number) => void;
}
    // 定义一个函数，用于渲染Todo列表
function TotoList( {todos, toggleTodo, deleteTodo}: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
}
export default TotoList