<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>

        <AlertModal v-if="showModal" @close="showModal = false">
            <template #header>경고</template>
            <template #body>경고 Body</template>
            <template #footer>경고 Footer</template>
        </AlertModal>
    </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default{
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== ''){
                // this.$emit('이벤트 이름', 인자1,인자2);
                // this.$emit('addTodoItem', this.newTodoItem);
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },

        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components: {
        AlertModal
    }
}

</script>

<style>
input:focus{
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    height: 40px;
    width: 80%;
    font-size: 0.9rem;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn{
    color: white;
    widows: 50px;
    vertical-align: middle;
}
</style>