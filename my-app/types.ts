export interface Todo {
    id: number;
    text: string;
    completed: boolean; //状态
}

export interface TodosState {
    todos: Todo[];
}

// 定义其他类型...

export interface AppState {
    todos: TodosState;
    // 添加其他模块的state...
}