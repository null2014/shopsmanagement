import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/products/list',
    method: 'get',
    params
  })
}

export function updateProduct(data) {
  return request({
    url: '/vue-admin-template/product/update',
    method: 'post',
    data
  })
}
