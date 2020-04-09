import Vue from 'vue';
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue"
import Blog from "./views/Blog.vue"
import Project from "./views/Project.vue"

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/project",
            name: "projects",
            component: Project
        },
        {
            path: "*",
            redirect: '/'
        }


    ]
})