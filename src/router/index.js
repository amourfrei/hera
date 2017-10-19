import App from '../App'

const index = r => require.ensure([], ()=>r(require('../pages/index/index')), 'index')
