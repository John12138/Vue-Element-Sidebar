<template>
  <div class="app-wrapper">
    <div class = "sidebar-wrapper" @mouseover="toggleSidebar()">
        <sidebar class="sidebar-container"></sidebar>
    </div>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import AppMain  from '@/views/layout/components/AppMain'//页面布局的右侧区域
import sidebar  from '@/views/layout/components/sidebar'//页面布局的左侧菜单


export default {
  name: 'layout',
  components: {
    sidebar,
    AppMain
  },
  computed:{
      sidebar(){
          return this.$store.state.app.sidebar
      }
  },
  methods: {
      toggleSidebar(){
          if(!this.$store.state.app.sidebar.opened){
              //修改vuex中silder_bar的值
              this.$store.commit("TOGGLE_SIDEBAR");
          }
      }
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 180px;
}

.sidebar-container {
    transition: width 0.28s;
    width: 180px!important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
  }
.sidebar-container a {
      display: inline-block;
      width: 100%;
  }
.sidebar-container .svg-icon {
      margin-right: 16px;
  }
.sidebar-container .el-menu {
      border: none;
      width: 100%;
  }
  
</style>
