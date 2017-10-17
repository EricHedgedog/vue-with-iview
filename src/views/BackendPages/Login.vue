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
              <Input v-model="formItem.pwd" size="large" placeholder="水中月是天上月"></Input>
            </FormItem>
            <FormItem>
                <Button type="ghost" shape="circle" size="large">走咯</Button>
            </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>
<script>
  // import Axios form 'axios'
  export default {
    data () {
      return {
        formItem: {
          username: '',
          pwd: ''
        }
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
