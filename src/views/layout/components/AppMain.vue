<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
        <!--使用transition标签把需要被动画控制的元素，包裹起来
    name是自己命名的class的名称，用来写动画样式，如果不写name  则默认是v
    mode= "out-in"当前元素进行过渡，完成后新元素过渡进入-->
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      //简单的在router-view上加上一个唯一的key来保证路由切换时都会重新渲染触发钩子了。
    }
  }
}
</script>
