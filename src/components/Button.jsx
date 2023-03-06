"use client"

const Button = ({ text, type, showModal }) => {

    const theme = {
        create: 'bg-blue-400 text-white',
        signout: 'bg-stone-700 text-white',
        edit: 'bg-yellow-500 text-black',
        delete: 'bg-red-500 text-white'
    }

    const handleClick = () => {
        console.log(showModal)
        if (showModal !== undefined) {
            showModal(true)
        }
    }

    return (
        <button className={`${theme[type]} py-2 px-4 rounded-md`} onClick={handleClick}>{text}</button>
    )
}

export default Button