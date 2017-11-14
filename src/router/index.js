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
                    path: '/PraiseRecord',
                    component: resolve => require(['../components/page/PraiseRecord.vue'], resolve)     // Vue-Quill-Editor组件
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
                },
                {
                    path: '/submintreporttable',//调查报告
                    component: resolve => require(['../components/page/SubmitReport.vue'], resolve)
                },
                {
                    path: '/arecords',//考勤记录
                    component: resolve => require(['../components/page/ARecords.vue'], resolve)
                },
                {
                    path: '/evaluationenthusiasm',//班级管理积极性
                    component: resolve => require(['../components/page/EvaluationEnthusiasm.vue'], resolve)
                },
                {
                    path: '/speechquery',//演讲查询
                    component: resolve => require(['../components/page/SpeechQuery.vue'], resolve)
                },
                {
                    path: '/groupdiscussionquery',//分组讨论查询
                    component: resolve => require(['../components/page/GroupDiscussionQuery.vue'], resolve)
                },
                {
                    path: '/evaluation',//综合评分
                    component: resolve => require(['../components/page/Evaluation.vue'], resolve)
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
