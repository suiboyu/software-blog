<template>
  <div class="content">
    <div class="login-content">
      <h1>登录</h1>
      <div class="message">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name" style="width: 300px">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" style="width: 300px">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="margin-left: 50px">确定</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //  提示用户输入密码和用户名
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      ruleForm: {
        pass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { validator: checkAge, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 100%
  height 720px
  z-index 1000
  background-image url('../../../assets/styles/bg.gif')
  background-size 100% 100%
  .login-content
    width 24%
    height 330px
    background-color rgba(255, 255, 255, 255)
    position relative
    left 576px
    top 150px
    border-radius 10px
    h1
      font-size 30px
      font-weight blod
      text-align center
      padding-top 30px
    .message
     height 300px
     margin-top 20px
</style>