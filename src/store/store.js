import Vuex from 'vuex'

const storage = {
    fetch() {
        const arr = [];

        if (localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        TodoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, TodoItem) {
            const obj = {completed: false, item: TodoItem};
            localStorage.setItem(TodoItem, JSON.stringify(obj));
            state.TodoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.TodoItem.item);
            state.TodoItems.splice(payload.index,1);
        },
        toggleOneItem(state, payload){
            state.TodoItems[payload.index].completed = !state.TodoItems[payload.index].completed;
      
            localStorage.removeItem(payload.TodoItem.item);
            localStorage.setItem(payload.TodoItem.item, JSON.stringify(payload.TodoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.TodoItems = [];
        }
    }
});