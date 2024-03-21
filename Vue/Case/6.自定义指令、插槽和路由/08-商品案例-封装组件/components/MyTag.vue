<template>
    <div class="my-tag">
        <input 
            v-if="isEdit"
            v-focus
            ref="inp"
            class="input"
            type="text"
            placeholder="输入标签"
            :value="value"
            @blur="isEdit = false"
            @keyup.enter="handleEnter"
        />
        <div @dblclick="handleClick" class="text" v-else>
        {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    data() {
        return {
            isEdit: false,
        }
    },
    methods: {
        handleClick() {
            // 双击后，切换到输入框状态(Vue是异步dom更新)
            this.isEdit = true
            // 等dom更新完，在获取焦点
            /* this.$nextTick(() => {
                // 立刻获取焦点状态
                this.$refs.inp.focus()
            }) */
        },
        handleEnter(e) {
            // 非空处理
            if (e.target.value.trim() === '') return alert('标签内容不能为空')
            // console.log('回车了')
            // 子传父，将回车时，输入框的内容提交给父组件更新
            // 由于父组件是v-model，触发事件，需要触发 input
            this.$emit('input', e.target.value)
            // 提交完成，关闭输入状态
            this.isEdit = false
        }
    }
}
</script>

<style  lang="less" scoped>
.my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>