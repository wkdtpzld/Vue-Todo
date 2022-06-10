const addOneItem = (state, TodoItem) =>{
    const obj = {completed: false, item: TodoItem};
    localStorage.setItem(TodoItem, JSON.stringify(obj));
    state.TodoItems.push(obj);
}

const removeOneItem = (state, payload) =>{
    localStorage.removeItem(payload.TodoItem.item);
    state.TodoItems.splice(payload.index,1);
}

const toggleOneItem = (state, payload) =>{
    state.TodoItems[payload.index].completed = !state.TodoItems[payload.index].completed;

    localStorage.removeItem(payload.TodoItem.item);
    localStorage.setItem(payload.TodoItem.item, JSON.stringify(payload.TodoItem));
}

const clearAllItems = (state) =>{
    localStorage.clear();
    state.TodoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}