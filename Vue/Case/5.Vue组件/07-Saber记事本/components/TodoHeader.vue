<template>
  <!-- 输入框 -->
    <header class="header">
      <h1>小黑记事本</h1>
      <input
        @keyup.enter="handleAdd"
        v-model="todoName" placeholder="请输入任务" class="new-todo" />
      <button @click="handleAdd" class="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        handleAdd() {
            // console.log(this.todoName)
            if(this.todoName.trim() === '') {
                alert('任务名不能为空')
                return 
            }
            this.$emit('add', this.todoName)
            this,this.todoName = ''
        }
    }
}
</script>

<style>

</style>