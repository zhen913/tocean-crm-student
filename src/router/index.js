import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },

                {
                    path: '/submitproject',
                    component: resolve => require(['../components/page/SubmitProject.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/DisciplinaryRecord',
                    component: resolve => require(['../components/page/DisciplinaryRecord.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/jobapplication',
                    component: resolve => require(['../components/page/JobApplication.vue'], resolve)    // 拖拽列表组件
                },    {
                    path: '/uploadresume',
                    component: resolve => require(['../components/page/UploadResume.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/studentfile',
                    component: resolve => require(['../components/page/StudentFile.vue'], resolve)
                },
                {
                    path: '/submitjob',
                    component: resolve => require(['../components/page/SubmitJob.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
