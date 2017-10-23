<template>
  <Menu class="side-menu" :theme="theme" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="document-text"></Icon>
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="chatbubbles"></Icon>
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="账号管理">
            <MenuItem name="3">
                <Icon type="person"></Icon>
                修改密码
            </MenuItem>
        </MenuGroup>
    </Menu>
</template>
<script>
    export default {
      data () {
        return {
          theme: 'dark'
        }
      }
    }
</script>
<style lang="less">
.side-menu{
  position: absolute;
  top:0;
  z-index: 1;
  padding-top:65px;
  height: 100%;
  text-align: left;
}
</style>
