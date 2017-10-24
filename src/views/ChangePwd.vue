<template>
  <div class="cp-wrapper">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="旧密码" prop="age">
            <Input type="text" v-model="formCustom.age" number></Input>
        </FormItem>
        <FormItem label="新密码" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
    export default {
      data () {
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入新密码'))
          } else {
            if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
              this.$refs.formCustom.validateField('passwdCheck')
            }
            callback()
          }
        }
        const validatePassCheck = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入新密码'))
          } else if (value !== this.formCustom.passwd) {
            callback(new Error('两次输入新密码不一致!'))
          } else {
            callback()
          }
        }
        const validateAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('旧密码不能为空'))
          }
        }

        return {
          formCustom: {
            passwd: '',
            passwdCheck: '',
            age: ''
          },
          ruleCustom: {
            passwd: [
                        { validator: validatePass, trigger: 'blur' }
            ],
            passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
            ],
            age: [
                        { validator: validateAge, trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields()
        }
      }
    }
</script>
<style lang="less">
.cp-wrapper{
  width:500px;
  margin-left: auto;
  margin-right: auto;
}
</style>

