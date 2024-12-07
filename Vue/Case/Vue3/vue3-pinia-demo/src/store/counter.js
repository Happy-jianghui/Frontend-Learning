import { defineStore } from "pinia"
import { ref, computed } from "vue" 

// 定义store
// defineStore(仓库的唯一标识, () => { ... })

export const useCounterStore = defineStore('counter', () => {
    // 声明数据 state - count
    const count = ref(100)
    // 声明操作数据的方法 action（普通函数）
    const addCount = () => count.value++
    const subCount = () => count.value--

    // 声明基于数据派生的计算属性 getters（computed）
    const double = computed(() => count.value * 2)

    // 声明数据 state - msg
    const msg = ref('hello pinia')

    // 暴露共享给外
    return {
        count,
        msg,
        addCount,
        subCount,
        double
    }
}, {
    // persist: true // 开启当前模块的持久化 
    persist: {
        key: 'my-counter',
        pick: ['count']
    }
})