import Vue from 'vue'
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import AgeVerification from '../views/AgeVerification.vue'
import BackSeat from '../views/BackSeat.vue';
import DIY from '../views/DIY.vue';
import DriverSeat from '../views/DriverSeat.vue'
import Home from '../views/Home.vue';
import Hood from '../views/Hood.vue';
import Mechanic from '../views/Mechanic.vue'
import Trunk from '../views/Trunk.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/hood',
    name: 'hood',
    component: Hood
  },
  {
    path: '/hood/no',
    name: 'mechanic',
    component: Mechanic
  },
  {
    path: '/hood/yes',
    name: 'diy',
    component: DIY
  },
  {
    path: '/trunk',
    name: 'trunk',
    component: Trunk
  },
  {
    path: '/drivers-license-test',
    name: 'age-verification',
    component: AgeVerification
  },
  {
    path: '/drivers-license-test/passed',
    name: 'driver-seat',
    component: DriverSeat
  },
  {
    path: '/drivers-license-test/failed',
    name: 'back-seat',
    component: BackSeat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
