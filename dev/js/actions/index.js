export const selectToDo = (todo) => {
	console.log("You clicked on todo: " + todo.id);

	return {
		type: 'TODO_SELECTED',
		payload: todo
	}
}