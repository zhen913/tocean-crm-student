import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
Vue.use(ElementUI);

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.JWT_TOKEN) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${localStorage.JWT_TOKEN}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            console.log('axios:' + error.response.status);
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit('LOG_OUT');
                    localStorage.removeItem('USERNAME');
                    localStorage.removeItem('JWT_TOKEN');
                    router.replace({
                        path: '/readme',
                        query: {redirect: router.currentRoute.fullPath}
                    });
            }
        }
        return Promise.reject(error.response.data);   // 返回接口返回的错误信息
    });
Vue.prototype.$axios = axios;

// JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
router.beforeEach(({path}, from, next) => {
    //用户在登录或未登录情况下都可以转到这两个页面
    if(path === '/readme' || path ==='/login'){
        next();
        return;
    }


    //如果是其它页面，则 获取 JWT Token判断是否登录
    if (localStorage.getItem('JWT_TOKEN')) {
        //用户已经登录，转到下一个页面
        next();

    } else {
        //用户没有登录，转到readme
        next({path: '/readme'});
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

