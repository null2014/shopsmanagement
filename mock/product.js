import Mock from 'mockjs'

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    name: '@sentence(1, 5)',
    typeName: 'HUAWEI@integer(1, 30)',
    price: '@integer(1000, 5000)',
    salePrice: '@integer(2000, 6000)',
    createTime: '@datetime',
    updateTime: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/products/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]

