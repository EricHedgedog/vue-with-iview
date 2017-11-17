<template>
  <div class="panel-top">
    <div class="top-logo">
      <span>X.X Blog Management System</span>
    </div>
    <div class="top-logoff">
      <div class="top-username">U r the Boss</div>
      <div class="top-logoff-btn"><Button type="text" @click="logoff">Exit</Button></div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      logoff: function () {
        localStorage.clear()
        this.$router.push({path: '/admin'})
      }
    }
  }
</script>
<style lang="less">
.panel-top{
  position: relative;
  z-index: 9;
  height: 65px;
  background-color:#3d4452;
  color:#fff;
}
.top-logo{
  font-size: 18px;
  margin-left: 20px;
  float: left;
  padding-left: 40px;
  line-height: 65px;
  background: url(~assets/images/Horse-white.png) no-repeat 0 center;
}
.top-logoff{
  float: right;
  margin-right: 20px;
  line-height: 65px;
  div{
    float: left;
    margin-left: 15px;
  }
  .top-username{
    font-size: 14px;
    padding-left: 25px;
    background: url(~assets/images/Horse-head.png) no-repeat 0 22px;
  }
  .top-logoff-btn{
    .ivu-btn-text{
      font-size: 14px;
      color:#fff;
      padding-left: 25px;
      background: url(~assets/images/exit.png) no-repeat 0 7px;
    }
  }
}
</style>
