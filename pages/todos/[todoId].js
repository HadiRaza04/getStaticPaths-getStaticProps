import { useRouter } from "next/router";

export default function (prop) {

    const router = useRouter();
    const todoId = router.query.todoId;
    const { todo } = prop;
    if(!todo){
      return <div style={{color: "black", fontSize: "50px", textAlign: "center"}}>Loading...</div>
    }
    return (
        <div style={{color: "black", fontSize: "30px", textAlign: "center"}}>
            <h1 style={{fontFamily: "cursive", background: "lightblue"}}>Todo Detail Page</h1>
            <h3>Todo {todoId}</h3>

          {todo.title}

        </div>
    )
}
export async function getStaticProps ({params}){
    const {todoId} = params;
    // console.log(todoId);
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    // console.log(data);
    return {
      props: {
        todo: data
      }
    }
}

export const getStaticPaths = async () => {
return {
    paths: [
    {
        params: {
        todoId: '1',
        },
    }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
}
}