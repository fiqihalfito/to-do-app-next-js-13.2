// "use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

// NOTE : CANNOT DO POST OR EDIT FOR NOW, WAITING FOR FUTURE RELEASE
const Modal = ({ type, showModal, todo }) => {
    const router = useRouter()

    const [data, setData] = useState({
        user_email: 'fiqihalfito@gmail.com',
        title: null,
        progress: 50,
        date: null,
    })


    const handleChange = (e) => {
        const { name, value } = e.target

        setData(data => (
            {
                ...data,
                [name]: value
            }
        ))
    }

    const postTodo = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3000/api/todos?user_email=${data.user_email}&title=${data.title}&progress=${data.progress}&date=${data.date}`)

        if (response.ok) {
            const res = await response.json()
            console.log('todo created', res)
            router.refresh()
            showModal(false)
        }
        console.log(response);
    }

    console.log(data)

    return (
        <div className="bg-black bg-opacity-40 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="bg-white rounded w-1/2 p-8">
                <div className="flex justify-between mb-8">
                    <h3 className="text-2xl">Let's {type} you task</h3>
                    <button onClick={() => showModal(false)}>X</button>
                </div>
                <form className="flex flex-col" >
                    <label className="text-lg" htmlFor="title">Title</label>
                    <input
                        className="p-2 border-2 rounded my-4"
                        type={'text'}
                        name="title"
                        placeholder="title goes here"
                        id="title"
                        value={data.title}
                        onChange={handleChange} />

                    <label className="text-lg" htmlFor="progress">Progress</label>
                    <input
                        className="my-4"
                        type={'range'}
                        name="progress"
                        id="progress"
                        value={data.progress}
                        onChange={handleChange} />

                    <input
                        type="submit"
                        value="Submit"
                        className="py-2 px-4 bg-green-500 text-white rounded"
                        onClick={postTodo} />
                </form>
            </div>
        </div>
    )
}

export default Modal

