<template>
  <Menu class="side-menu" :theme="theme" :active-name="setActive" @on-select="routerTo">
        <MenuGroup title="内容管理">
          <MenuItem name="articles">
                <Icon type="document-text"></Icon>
                <!-- <router-link to="/articles">文章管理</router-link> -->
                文章管理
            </MenuItem>
            <MenuItem name="commentlist">
                <Icon type="chatbubbles"></Icon>
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="账号管理">
            <MenuItem name="changepwd">
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
      },
      computed: {
        setActive () {
          if (this.$route.path === '/addarticle') {
            return 'articles'
          } else {
            return this.$route.path.replace('/', '')
          }
        }
      },
      methods: {
        routerTo (e) {
          // console.log(e)
          this.$router.push(e)
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
