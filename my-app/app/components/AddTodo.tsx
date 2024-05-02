import { useState } from "react";

interface AddTodoProps {
    addTodo: (text: string) => void
}
// 添加事项
function AddTodo({addTodo}: AddTodoProps) {
    // 表单输入框的值
    const [text, setText] = useState('')
    // 表单提交事件
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === '') {
            return
        }
        // 调用父组件的addTodo方法
        addTodo(text)
        setText('')
    }
    return (
       <form onSubmit={handleSubmit}>
           <input
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
           />
           <button>新建事项</button>
       </form>
    )
}
export default AddTodo