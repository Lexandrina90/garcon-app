import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import CallWaiter from "@/components/CallWaiter.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/call-waiter', component: CallWaiter }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

