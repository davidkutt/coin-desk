import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import FlagIcon from 'vue-flag-icon'
import BitcoinDetails from "@/views/BitcoinDetails";
import BitcoinConversion from "@/views/BitcoinConversion";
import MyBitcoin from "@/views/MyBitcoin";
import BitcoinDiagram from "@/views/BitcoinDiagram";

Vue.use(FlagIcon)
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/details',
        name: 'BitcoinDetails',
        component: BitcoinDetails
    },
    {
        path: '/converter',
        name: 'BitcoinConversion',
        component: BitcoinConversion
    },
    {
        path: '/diagram',
        name: 'BitcoinDiagram',
        component: BitcoinDiagram
    },
    {
        path: '/my-bitcoin',
        name: 'MyBitcoin',
        component: MyBitcoin
    }
]

const router = new VueRouter({
    routes
})

export default router
