<template>
  <div class="content">
    <el-radio-group v-model="isCollapse" class="navbar-title" >
      <el-radio-button :label="false" class="title-left">展开</el-radio-button>
      <el-radio-button :label="true" class="title-right" style="color: #fff">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
    >
    <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title" style="color: #fff">作品管理</span>
    </template>
    <el-menu-item-group>
      <router-link tag="el-menu-item" index="1-1" style="color: #fff" to="/issue">发布文章</router-link>
      <el-menu-item index="1-2" style="color: #fff">管理文章</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <el-menu-item index="1-3" style="color: #fff">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title" style="color: #fff">选项4</span>
      <el-menu-item index="1-4-1" style="color: #fff">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title" style="color: #fff">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-document"></i>
    <span slot="title" style="color: #fff">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title" style="color: #fff">导航四</span>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.title-left >>> .el-radio-button__inner {
    width: 100px !important;
    height: 70px !important;
    text-align: center;
    padding: 26px 20px;
    /* background: red !important; */
    background: #ccc;
}
.title-right >>> .el-radio-button__inner {
    width: 100px !important;
    height: 70px !important;
    text-align: center;
    padding: 26px 20px;
    /* background: #545c64; */
    background: #ccc;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
  width 100%
  height 70px
  background rgb(84, 92, 100)
  .navbar-title
    width 200px
    height 70px
    background-color red
    .title-left /deep/ .el-radio-button__inner
      text-align center
</style>
