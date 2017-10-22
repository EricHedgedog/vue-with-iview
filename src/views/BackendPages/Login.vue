<template>
  <div>
    <div class="login-wrapper">
      <Card class="login-box">
        <Form :model="formItem">
            <h3 :class="{'login-title' : showName}" @click="showNameInput">海中月是天上月 眼前人是心上人</h3>
            <FormItem class="login-input" v-show="showName">
              <Input v-model="formItem.username" size="large" @on-enter="showPwdInput" placeholder="你叫嘛？"></Input>
            </FormItem>
            <FormItem class="login-input"  v-show="showPwd">
              <Input v-model="formItem.pwd" type="password" size="large"  @on-enter="showSubmit" placeholder="海中月是天上月"></Input>
            </FormItem>
            <FormItem v-show="showBtn">
                <Button type="ghost" shape="circle" size="large" @click="submit()">咻咻咻</Button>
            </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>
<script>
  import config from 'config'
  import Axios from 'axios'
  export default {
    data () {
      return {
        showName: false,
        showPwd: false,
        showBtn: false,
        formItem: {
          username: '',
          pwd: ''
        }
      }
    },
    created () {

    },
    methods: {
      LoginAuth () {
        var params = {
          name: this.formItem.username,
          pwd: this.formItem.pwd
        }
        Axios.post(config.BASE_URL + `api/auth`, params).then((response) => {
          if (response.data.success === true) {
            this.$Message.success(response.data.message)
            localStorage.setItem('currentUser_token', response.data.token)
            localStorage.setItem('isAdmin', response.data.isAdmin)
            this.$router.push({path: '/homepanel'})
          } else {
            this.$Message.error(response.data.message)
          }
        })
      },
      showNameInput: function () {
        this.showName = true
      },
      showPwdInput: function () {
        this.showPwd = true
      },
      showSubmit: function () {
        this.showBtn = true
      },
      submit () {
        this.LoginAuth()
      }
    }
  }
</script>
<style lang="less">
.login-wrapper{
  .login-box{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    margin:0 auto;
    .login-title{
      margin-bottom: 20px;
    }
  }
}
</style>
