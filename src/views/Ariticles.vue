<template>
  <div>
    <div class="add-articles">
      <Button type="primary" shape="circle" @click="addArticle">新增文章</Button>
    </div>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <Page class="pagination" :total="100"></Page>
  </div>
</template>
<script>
    // import config from 'config'
    // import Axios from 'axios'
    export default {
      data () {
        return {
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
                    }
                  }, '删除')
                ])
              }
            }
          ],
          data1: [
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
      methods: {
        addArticle: function () {
          this.$router.push('/addarticle')
          // var params = {
          //   title
          // }
          // Axios.post(config.BASE_URL + `api/addArticle`, params).then((response) => {
          //   if (response.data.success === true) {
          //     this.$Message.success(response.data.message)
          //     localStorage.setItem('currentUser_token', response.data.token)
          //     localStorage.setItem('isAdmin', response.data.isAdmin)
          //     this.$router.push({path: '/homepanel'})
          //   } else {
          //     this.$Message.error(response.data.message)
          //   }
          // })
        },
        handleSelectAll (status) {
          this.$refs.selection.selectAll(status)
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
