import ListHeader from "@/components/ListHeader"
import ListItem from "@/components/ListItem"
import { getTodos } from "../../lib/prisma/todos"



export default async function Home() {
  // no need fetch because nextjs 13 can directly get data from database (e.g. prisma)
  // const response = await fetch(`http://localhost:3000/api/todos`)
  // const todos = await response.json()
  const todos = await getTodos()

  return (
    <div className='bg-slate-200 w-screen h-screen flex justify-center'>
      <div className="bg-white w-1/2 h-fit rounded-lg">
        <ListHeader />
        <ul>
          {todos.map(todo => (
            <ListItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  )
}
