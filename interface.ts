import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  // implementing typescript interface to avoid errors
  id: number;
  title: string;
  completed: boolean;
} // interface:- we are saying that inside the indes.js there is an some object called Todo.
// & every to do having a three property. id, title, completed.

axios.get(url).then((response) => {
  console.log(response.data);
  // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

  const todo = response.data;
  const id = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
  /*
        Resoponse wil be
             The Todo with ID: undefined
             Has a title of: undefined  
             Is it finished? undefined 

                result is getting undefinied because the property of todo is not correct if we check in response.data, 
                the actual property is userId, id, title, completed

        we wrote a code which have nesty bugs & we don't aware about the bug untill we run the code.  so typescript is useful. 


******************************************************imlementing simple interface to avoid errors****************************************************************************************************
    so we create interfaces to tell typescript that what type of information we are going to expect to receive from the api.     
*/

  // getting error because the property of todo is not correct if we check in response.data,
  // const todos = response.data as Todo; // we are telling typescript that the response.data is going to be a Todo.
  // const ids = todos.ID;
  // const titles = todos.Title;
  // const finisheds = todos.finished;

  const todos = response.data as Todo; // we are telling typescript that the response.data is going to be a Todo.
  const ids = todos.id;
  const titles = todos.title;
  const finisheds = todos.completed;

  console.log(`
            The Todo with ID: ${ids}
            Has a title of: ${titles}
            Is it finished? ${finisheds}
        `);
});
