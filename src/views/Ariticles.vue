<template>
  <div>
    <div class="add-articles">
      <Button type="primary" shape="circle" @click="addArticle">新增文章</Button>
    </div>
    <Table border ref="viewArticle" :columns="columns4" :data="articles"></Table>
    <Page class="pagination" :total="total" @on-change="handlePageChange"></Page>
    <Modal
        :title="article.title"
        v-model="modalView"
        class-name="vertical-center-modal">
        <div class="date-center">{{article.date}}</div>
        <p v-html="article.render"></p>
        <div slot="footer">
            <Button type="primary" size="large"  @click="modalView = false">确定</Button>
        </div>
    </Modal>
  </div>
</template>
<script>
    import config from 'config'
    import Axios from 'axios'
    export default {
      data () {
        return {
          article: {}, // 单篇文章详细内容
          modalView: false, // 查看modal状态
          total: 0,
          rows: 10,
          page: 1,
          current: 1,
          columns4: [
            {
              title: '标题',
              key: 'title'
            },
            {
              title: '日期',
              key: 'date'
            },
            {
              title: '操作',
              key: 'action',
              fixed: 'right',
              width: 180,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.viewDetail(params)
                      }
                    }
                  }, '查看'),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'text',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.deleteArticle(params)
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ],
          articles: [
            {
              title: '王小明',
              date: 18,
              address: '北京市朝阳区芍药居'
            },
            {
              title: '张小刚',
              date: 25,
              address: '北京市海淀区西二旗'
            },
            {
              title: '李小红',
              date: 30,
              address: '上海市浦东新区世纪大道'
            },
            {
              title: '周小伟',
              date: 26,
              address: '深圳市南山区深南大道'
            }
          ]
        }
      },
      created () {
        this.getArticles()
      },
      methods: {
        getArticles: function () {
          var params = {
            rows: this.rows,
            page: this.page
          }
          Axios.get(config.BASE_URL + `api/articles`, {params}).then((response) => {
            if (response.data.success === true) {
              this.articles = response.data.list
              this.total = response.data.total
              for (var i = 0, len = this.articles.length; i < len; i++) {
                var formatDate = new Date(this.articles[i].date)
                var minutes = formatDate.getMinutes()
                if (minutes < 10) {
                  minutes = '0' + minutes
                }
                this.articles[i].date = formatDate.getFullYear() + '-' + (formatDate.getMonth() + 1) + '-' + formatDate.getDate() + '  ' + formatDate.getHours() + ':' + minutes
              }
            } else {
              this.$Message.error(response.data.message)
            }
          })
        },
        viewDetail: function (params) {
          console.log(params)
          this.article = params.row
          this.modalView = true
          // 实例化modal的写法
          // this.$Modal.confirm({
          //   render: (h) => {
          //     return h('h2', {
          //       style: {
          //         textAlign: 'center'
          //       }
          //     }, params.row.title)
          //   }
          // })
        },
        deleteArticle: function (params) {
          Axios.post(config.BASE_URL + `api/deleteArticle`, {id: params.row._id}).then((response) => {
            if (response.data.success === true) {
              this.$Message.success(response.data.message)
              this.getArticles()
            } else {
              this.$Message.error(response.data.message)
              this.getArticles()
            }
          })
        },
        addArticle: function () {
          this.$router.push('/addarticle')
        },
        handlePageChange: function (val) {
          this.page = val
          this.getArticles()
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
</style>
