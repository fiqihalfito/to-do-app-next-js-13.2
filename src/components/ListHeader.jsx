"use client"

import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"

const ListHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="flex justify-between">
            <h3>My Holiday List</h3>
            <div className="space-x-2">
                <Button text={'Add new'} type="create" showModal={setIsModalOpen} />
                <Button text={'Sign out'} type="signout" />
            </div>
            {isModalOpen && <Modal type={'create'} showModal={setIsModalOpen} />}
        </div>
    )
}

export default ListHeader