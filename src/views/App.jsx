import {useState} from "react"
import serverData from "../server.json"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {Calendar} from "react-date-range"

function TodoList() {

    const [todos, setTodos] = useState([1, 2, 3, 4])

    function handleChange() {

    }

    function addTodo() {
        setTodos([<li>bob</li>])
    }

    return (
        <div className="todoList">
            <input placeholder="New Todo"/>
            <button onClick={addTodo}>+ Add</button>
            <ul>
                {todos}
            </ul>
        </div>
    )
}

function Counter() {

    const [counter, setCounter] = useState(0)

    function increaseCounter() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increaseCounter}>+1</button>
        </div>
    )
}

function Slider() {

    const [currentPostIndex, setCurrentPostIndex] = useState(0)

    const post = serverData[currentPostIndex]

    function move(direction) {
        if (direction === "next") {
            const newIndex = currentPostIndex + 1
            if (newIndex >= serverData.length) {
                setCurrentPostIndex(0)
            } else {
                setCurrentPostIndex(newIndex)
            }
        } else {
            const newIndex = currentPostIndex - 1
            if (newIndex < 0) {
                setCurrentPostIndex(serverData.length - 1)
            } else {
                setCurrentPostIndex(newIndex)
            }
        }
    }

    const next = () => move("next")
    const prev = () => move("prev")

    return (
        <div>
            <p>{post.name}</p>
            <img src={post.imgUrl} alt=""/>
            <p className="content">{post.content.slice(0, 100)}</p>
            <div className="controls">
                <button onClick={prev}>{"< Prev"}</button>
                <button onClick={next}>{"Next >"}</button>
            </div>
        </div>
    )
}

const Avatar = () => (
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
         alt=""/>
)

function App() {

    return (
        <div>
            <p className="font-bold">Hallo</p>

            <Slider/>
            <TodoList/>

            <div className="flex -space-x-1 overflow-hidden">
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
        </div>
    )
}

export default App