import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import CreateTask from '@/components/CreateTask'
import Tasks from '@/components/Tasks'
import Classes from '@/components/Classes'
import AddClass from '@/components/AddClass'
import Task from '@/components/Task'
import EditTask from '@/components/EditTask'
import MyClass from '@/components/MyClass'
import EditClass from '@/components/EditClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: CreateTask
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/classes',
      name: 'classes',
      component: Classes
    },
    {
      path: '/add-class',
      name: 'add-class',
      component: AddClass
    },
    {
      path: '/tasks/:taskId',
      name: 'task',
      component: Task
    },
    {
      path: '/tasks/:taskId/edit',
      name: 'edit-task',
      component: EditTask
    },
    {
      path: '/classes/:classId',
      name: 'class',
      component: MyClass
    },
    {
      path: '/classes/:classId/edit',
      name: 'edit-class',
      component: EditClass
    }
  ]
})
