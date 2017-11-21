<template>
  <div>
    <div id="editor">
          <div><Input v-model="title" placeholder="请输入文章标题" style="width: 100%;height:48px;"></Input></div>
          <mavon-editor :toolbars="toolbars" @save="addArticle" class="mavon-editor"></mavon-editor>
      </div>
  </div>
</template>
<script>
    import config from 'config'
    import Axios from 'axios'
    // import VueMarkdown from 'vue-markdown'
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
      // components: {VueMarkdown},
      components: {
        mavonEditor
      },
      data () {
        return {
          title: '',
          toolbars: {
            bold: true, // 粗体
            italic: true, // 斜体
            header: true, // 标题
            underline: true, // 下划线
            strikethrough: true, // 中划线
            mark: true, // 标记
            superscript: true, // 上角标
            subscript: true, // 下角标
            quote: true, // 引用
            ol: true, // 有序列表
            ul: true, // 无序列表
            link: true, // 链接
            imagelink: true, // 图片链接
            code: true, // code
            table: true, // 表格
            subfield: true, // 是否需要分栏
            fullscreen: true, // 全屏编辑
            readmodel: true, // 沉浸式阅读
            htmlcode: true, // 展示html源码
            help: true, // 帮助
            /* 新增 */
            undo: false, // 上一步
            redo: false, // 下一步
            trash: false, // 清空
            save: true // 保存（触发events中的save事件）
          }
        }
      },
      methods: {
        addArticle: function (val, render) {
          var params = {
            title: this.title,
            content: val,
            render: render
          }
          Axios.post(config.BASE_URL + `api/addArticle`, params).then((response) => {
            if (response.data.success === true) {
              this.$Message.success(response.data.message)
              this.$router.push('/articles')
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
    margin: auto;
    width: 100%;
    height: 500px;
}
.mavon-editor{
  max-height: 500px;
}
</style>
