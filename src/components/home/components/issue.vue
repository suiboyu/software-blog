<template>
  <div class="">
    <Pub></Pub>
    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="文章标题" prop="name">
      <el-input v-model="ruleForm.name" style="width: 400px"></el-input>
    </el-form-item>
    <el-form-item label="文章作者" prop="author">
      <el-input v-model="ruleForm.author" style="width: 400px"></el-input>
    </el-form-item>
    <el-form-item label="文章类型" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择文章类型">
        <el-option label="科普" value="shanghai"></el-option>
        <el-option label="生活" value="beijing"></el-option>
        <el-option label="艺术" value="beijing"></el-option>
        <el-option label="散文" value="beijing"></el-option>
        <el-option label="小说" value="beijing"></el-option>
        <el-option label="其他" value="beijing"></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="提交日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="提交日期" v-model="ruleForm.date1" style="width: 100%;">
        </el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="是否付费" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="文章内容" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc" :rows="4" style="width: 1200px"></el-input>
  </el-form-item>
  <el-form-item style="margin-left: 460px">
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  </el-form>
 </div>
</div>
</template>

<script>
import Pub from '../../public/pub'
export default {
  name: 'issue',
  components: {
    Pub
  },
  data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '文章标题', trigger: 'blur' },
            // { min: 1, max: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '文章作者', trigger: 'blur' },
            // { min: 1, max: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择文章类型', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '文章内容', trigger: 'blur' }
          ]
        }
      };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.content
  width 100%
  height 500px
  background #ccc
  position relative
  left 200px
  top 80px
  border-radius 10px
</style>
