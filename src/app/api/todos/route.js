import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma"
import { createTodo, deleteTodo } from "../../../../lib/prisma/todos"

// NOTE : no need to use api because can directly get data from database
export async function GET(request) {
    // const todos = await prisma.todos.findMany()
    // console.log(todos)
    // return NextResponse.json(todos)
    // NOTE : this is for create data, it should be POST method, but nextjs 13.2 haven't updated it yet
    const { searchParams } = new URL(request.url);
    const data = Object.fromEntries(searchParams)
    data.progress = +data.progress
    const newTodo = await createTodo(data)
    return NextResponse.json(newTodo)
}

export async function POST(request) {
    console.log('req post================================================')
    // console.log(request.body)
    // console.log(JSON.parse(request.body))
    // const data = JSON.parse(request.body)
    return NextResponse.json({ res: 'post called' })
    // const todo = request
    // const newTodo = await createTodo()
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const deletedTodo = await deleteTodo(id)
    return NextResponse.json({ deletedTodo })
}