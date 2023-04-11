import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  // implementing typescript interface to avoid errors
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todos = response.data as Todo; // we are telling typescript that the response.data is going to be a Todo.
  const id = todos.id;
  const title = todos.title;
  const finished = todos.completed;

  logTodo(id, title, finished);
});

// ******************************************************imlementing custom log function****************************************************************************************************
const logTodo = function (id,title, finished) { // this function will not give the proper data. because the order of the parameters is not correct.
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
};

