<template>
  <div>
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    <Page class="pagination" :total="100"></Page>
  </div>
</template>
<script>
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
</style>
