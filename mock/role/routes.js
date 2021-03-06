//  Just a mock
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'edit/:id',
        name: 'Edit',
        component: () => import('@/views/products/edit'),
        meta: { title: '編輯商品', icon: 'form' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/products',
    component: 'layout/Layout',
    redirect: '/products/list',
    name: 'Products',
    alwaysShow: true,
    meta: { title: '商品管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/products/index'),
        meta: { title: '商品列表', icon: 'table' }
      },
      {
        path: 'update/:id',
        name: 'Update',
        hidden: true,
        component: () => import('@/views/products/edit'),
        meta: { title: 'ProductsUpdate', icon: 'table' }
      }
    ]
  },
  {
    path: '/charts',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Charts',
    alwaysShow: true,
    meta: { title: 'Charts', icon: 'example' },
    children: [
      {
        path: 'mix-chart',
        name: 'MixChart',
        component: () => import('@/views/Charts/mix-chart'),
        meta: { title: 'MixChart', icon: 'table' }
      }
    ]
  },
  {
    path: '/excel',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Excel',
    alwaysShow: true,
    meta: { title: 'Excel', icon: 'example' },
    children: [
      {
        path: 'upload-excel',
        name: 'UploadExcel',
        component: () => import('@/views/excel/upload-excel'),
        meta: { title: 'UploadExcel', icon: 'table' }
      }
    ]
  },
  {
    path: '/pdf',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'PDF',
    alwaysShow: true,
    meta: { title: 'PDF', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'PDF',
        component: () => import('@/views/pdf/index'),
        meta: { title: 'Download', icon: 'table' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },
  {
    path: '/zip',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Zip',
    alwaysShow: true,
    meta: {
      title: 'ZIP', icon: 'example', roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/zip/index'),
        meta: {
          title: 'LIST', icon: 'example', roles: ['admin']
        } 
      }
    ]
  },
  /*同步攔截的時候 異步的東東嗨沒有處理完 所以放在異步攔截*/ 
  /*頁面一刷新 addroutes 還沒添加路由就開始跳轉了 所以找不到路由就到404頁面 */
  { path: '*', redirect: '/404', hidden: true }
]