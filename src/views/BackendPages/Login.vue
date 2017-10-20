<template>
  <div>
    <div class="login-wrapper">
      <Card class="login-box">
        <Form :model="formItem">
            <h3 class="login-title">你要干嘛？</h3>
            <FormItem class="login-input">
              <Input v-model="formItem.username" size="large" placeholder="你叫嘛？"></Input>
            </FormItem>
            <FormItem class="login-input">
              <Input v-model="formItem.pwd" size="large" placeholder="海中月是天上月"></Input>
            </FormItem>
            <FormItem>
                <Button type="ghost" shape="circle" size="large" @click="submit()">走咯</Button>
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
            this.$router.push({path: '/homepanel'})
          }
        })
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
