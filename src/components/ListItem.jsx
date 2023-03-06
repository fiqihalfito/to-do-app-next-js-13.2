"use client"

import { useRouter } from "next/navigation"
import Button from "./Button"
import ProgressBar from "./ProgressBar"

const ListItem = ({ todo }) => {
    const router = useRouter()

    const deleteTodo = async () => {
        const response = await fetch(`http://localhost:3000/api/todos?id=${todo.id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            const res = await response.json()
            console.log(res)
            router.refresh()
        }
    }

    return (
        <li className="flex justify-between">
            <div id="info-container">
                <p>{todo.title}</p>
                <ProgressBar />
            </div>
            <div>
                <Button text={'Edit'} type={'edit'} />
                <Button text={'Delete'} type={'delete'} deleteTodo={deleteTodo} />
            </div>
        </li>
    )
}

export default ListItem