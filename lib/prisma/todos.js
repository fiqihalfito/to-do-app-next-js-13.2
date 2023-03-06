import prisma from "."

export const getTodos = async () => {
    const todos = await prisma.todos.findMany()
    return todos
}

export const createTodo = async (todo) => {
    const newTodo = await prisma.todos.create({
        data: todo,
    })

    return newTodo
}

export const deleteTodo = async (id) => {
    const deletedTodo = await prisma.todos.delete({
        where: {
            id: id,
        },
    })
    return deletedTodo
}