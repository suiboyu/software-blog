<template>
  <div class="">
    <Pub></Pub>
    <div class="content">
    <h1>管理员信息</h1>
    <div class="">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" :disabled="true">
        <el-form-item label="myid" style="width: 300px">
          <el-input v-model="formInline.user" placeholder="ID"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名" style="width: 300px">
          <el-input v-model="formInline.user" placeholder="姓名"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="密码" style="width: 300px">
          <el-input v-model="formInline.user" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="button">
      <el-button type="success">提交</el-button>
    </div>
    <div class="exit">
      <router-link type="info" to="/login" tag="el-button">退出登录</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Pub from '../../public/pub'
export default {
  name: 'setting',
  components: {
    Pub
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
  width 20%
  height 500px
  position relative
  background-color #ccc
  top 130px
  left 630px
  h1
    text-align center
    font-weight bold
    font-size 30px
    margin-bottom 30px
    margin-left -20px
  .button
    margin-bottom 15px
    margin-left 110px
  .exit
    margin-bottom -10px
    margin-left 95px
</style>
