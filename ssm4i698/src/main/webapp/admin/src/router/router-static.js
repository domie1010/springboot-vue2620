import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import discusshuatitaolun from '@/views/modules/discusshuatitaolun/list'
    import examquestion from '@/views/modules/examquestion/list'
    import kecheng from '@/views/modules/kecheng/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kechengshipin from '@/views/modules/kechengshipin/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import kechengziliao from '@/views/modules/kechengziliao/list'
    import huatitaolun from '@/views/modules/huatitaolun/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import discusskechengshipin from '@/views/modules/discusskechengshipin/list'
    import zuoyefabu from '@/views/modules/zuoyefabu/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/discusshuatitaolun',
        name: '话题讨论评论',
        component: discusshuatitaolun
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/kecheng',
        name: '课程',
        component: kecheng
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/kechengshipin',
        name: '课程视频',
        component: kechengshipin
      }
      ,{
	path: '/exampaper',
        name: '试卷管理',
        component: exampaper
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/kechengziliao',
        name: '课程资料',
        component: kechengziliao
      }
      ,{
	path: '/huatitaolun',
        name: '话题讨论',
        component: huatitaolun
      }
      ,{
	path: '/exampaperlist',
        name: '试卷列表',
        component: exampaperlist
      }
      ,{
	path: '/discusskechengshipin',
        name: '课程视频评论',
        component: discusskechengshipin
      }
      ,{
	path: '/zuoyefabu',
        name: '作业发布',
        component: zuoyefabu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
