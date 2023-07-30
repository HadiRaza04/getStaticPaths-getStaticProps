// import Button from '@/components/button/Button';
import List from '@/components/list/List';
import React, { useState } from 'react'
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';


export default function Home(props) {

  const {title, todos} = props;
  // if(!todos){
  //   return <div>Loadind...</div>
  // }

  const todosList = todos.map((todo) => {
    return (
      <li key={todo.id}>{todo.title}</li>
    )
  })


  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // const [loading, setLoading] = useState(false);
  const addValue = () => {
    setArr([...arr, arr[arr.length - 1] + 1]);
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  }
  const delValue = () => {
    arr.pop();
    setArr([...arr]);
  }

  
  return (
    <>
      <div>{title}</div>
      <List arr={arr} />
      

      
      <Button 
          type="primary" 
          onClick = {addValue}
          icon={< PlusCircleOutlined />}> 
           Add one 
        </Button>
        <Button 
          type="primary"
          danger
          onClick = {delValue}
          icon={< DeleteOutlined /> }> 
          Delete
        </Button>
        
        <div>
          {todosList}
        </div>
      
    </>
  )
}

export async function getStaticProps (){
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      title: "Hello",
      todos: data
    }
  }
}
