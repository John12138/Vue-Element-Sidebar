import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//这个组件需要在页面里单独引入
import Layout from '../views/layout'
/** @params process.env.NOOE_ENV 
 * 在node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息。
 * 但是process.env中并不存在NODE_ENV这个东西。NODE_ENV是用户一个自定义的变量，在webpack中它的用途是判断生产环境或开发环境的依据的。
 *  */
const _import = require('./_import_' + process.env.NODE_ENV)

export const constantRouterMap = [{
    path: '',
    component: Layout,
    redirect: 'homepage',
    name: 'homepage',
    children: [{
        path: 'homepage',
        component: _import('homepage/index'),
        meta: { title: '首页', icon: 'homepage' }
    }]
}, {
    path: '/example',
    component: Layout,
    redirect: 'example/table',
    meta: { title: '案例', icon: 'example' },
    children: [{
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: { title: '表格', icon: 'table' }
    }, {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: '树形菜单', icon: 'tree' }
    }]
}, {
    path: '/form',
    component: Layout,
    redirect: 'form/index',
    children: [{
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: { title: '表单', icon: 'form' }
    }]
}, {
    path: '/test',
    component: Layout,
    redirect: 'test/testview',
    meta: { title: '测试', icon: 'test' },
    children: [{
        path: 'testview',
        name: 'Testview',
        component: _import('testview/index'),
        meta: { title: '测试', icon: 'test' }
    }, {
        path: 'testview2',
        name: 'Testview2',
        component: _import('testview2/index'),
        meta: { title: '测试2', icon: 'test' }
    }]
}]

export default new Router({
    routes: constantRouterMap
})