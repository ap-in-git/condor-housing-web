import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
 const routes = [
       {
            path:"/product/:id",
            component: () => import("../pages/EachHouse"),
            name:"Product"
        },
            {
                path: "/",
                name: "Index",

                component: ()=>import("../pages/Index"),
            },
            {
                path: "/house",
                name:"HousePage",
                component: ()=>import("../pages/EachHouse"),
            },
            {
                path: "/login",
                name:"Login",
                component: ()=>import("../pages/Login"),
            },
            {
                path: "/register",
                name:"Register",
                component: ()=>import("../pages/Register"),
            },
            {
                path: "/add",
                name:"Add",
                component: ()=>import("../pages/AddProduct"),
            },
            {
                path: "/product-edit/:id",
                name:"ProductEdit",
                component: ()=>import("../pages/EditProduct"),
            },
            {
                path: "/my-listing",
                name:"MyListing",
                component: ()=>import("../pages/my-list"),
            },
            {
                path: "/saved-listing",
                name:"SavedListing",
                component: ()=>import("../pages/saved-list"),
            }

];
const router = new VueRouter({
    mode: "history",
    routes: routes,
});


export default router;