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