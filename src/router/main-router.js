export default [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName:"Login" */ '../components/Login'),
  },
  {
    path: '/home',
    component: () =>
      import(/* webpackChunkName:"Login" */ '../components/Home'),
  }
]