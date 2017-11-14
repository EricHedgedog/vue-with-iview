<template>
  <div>
    <div id="editor">
          <mavon-editor style="height: 100%"></mavon-editor>
      </div>
  </div>
</template>
<script>
    import config from 'config'
    import Axios from 'axios'
    // import VueMarkdown from 'vue-markdown'
    import { mavonEditor } from 'mavon-editor'
    export default {
      // components: {VueMarkdown},
      components: {
        mavonEditor
      },
      data () {
        return {
        }
      },
      methods: {
        addArticle: function () {
          var params = {
            title: this.title,
            content: this.content
          }
          Axios.post(config.BASE_URL + `api/addArticle`, params).then((response) => {
            if (response.data.success === true) {
            } else {
              this.$Message.error(response.data.message)
            }
          })
        }
      }
    }
</script>
<style lang="less">
.pagination{
  margin-top: 30px;
}
.add-articles{
  margin-bottom: 20px;
  text-align: right;
}
#editor {
    position: absolute;
    margin: auto;
    width: 80%;
    height: 100%;
}
</style>
