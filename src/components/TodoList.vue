<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(TodoItem, index) in this.storedTodoItems" v-bind:key="TodoItem" class="shadow">
                <i class="fa-solid fa-check checkBtn" 
                    v-bind:class="{checkBtnCompleted: TodoItem.completed}"
                    v-on:click="toggleComplete({TodoItem, index})">
                </i>
                <span v-bind:class="{textCompleted: TodoItem.completed}">{{TodoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo({TodoItem, index})">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default{
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        })
    },

    computed: {
        ...mapGetters(['storedTodoItems'])
    }
}

</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted{
        color: #b3adad;
    }
    .textCompleted{
        text-decoration: line-through;
        columns: #b3adad;
    }
    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter-from, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

</style>