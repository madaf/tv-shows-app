import Vue from "vue"
import VueRouter from "vue-router"
import TvShowsView from '../views/TvShowsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "TvShowsView",
    component: TvShowsView,
  },
  {
    path: "/:showName",
    name: "TvShowDetailsView",
    props: (route) => ({
      showName: route.params.showName
    }),
    component: () =>
      import(
        /* webpackChunkName: "TvShowDetailsView" */ "../views/TvShowDetailsView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router