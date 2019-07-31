<template>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
</template>

<script>
import sidebarItem from './sidebarItem'

export default {
  components: { sidebarItem },
  data(){
      return {
        //   routes : this.$router.options.routes
          //实现固定的的路由
          routes: this.$router.options.routes
        }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
    .el-menu li{
        list-style: none
    }
</style>
