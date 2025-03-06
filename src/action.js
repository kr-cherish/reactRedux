export const addTodo = (task) => ({
    type: "ADD_TODO",
    payload: task,
  });
  
  export const removeTodo = (index) => ({
    type: "REMOVE_TODO",
    payload: index,
  });
  