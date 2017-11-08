<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">上传简历信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips" style="text-align: right">
            <input type="button" value="提交" style="color: #1A438E"/>
        </div>
        <div class="title">
            <div style="margin-top: 0;padding-top: 0;">
                <el-button @click="show3 = !show3" class="button" style="margin-right: auto">
                    <el-breadcrumb separator=" ">
                        <el-breadcrumb-item style="color:#D1E2F2;font-size:0.8em">基本资料</el-breadcrumb-item>
                        <el-breadcrumb-item>（+点击标题栏展开）</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-button>
                <el-collapse-transition>
                    <div v-show="show3" style="margin:5px 15px;">
                        <div class="transition-box">
                               <div class="bg-purple" >简历:</div>
                               <div style="flex-grow: 1;">
                                <el-row :gutter="20">
                                    <el-col :span="18">
                                    <div class="grid-content bg-purple-light" style="flex-grow: 1;margin-right: 0;">
                                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
                                    </el-input>
                                </div></el-col>
                                <el-col :span="2"><div class="grid-content row-bg">
                                    <input type="button" value="预览..."/>
                                </div></el-col>
                            </el-row>
                            </div>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        <div class="plugins-tips" style="text-align: center;">
            <input type="button" value="确认提交" style="color: #1A438E;margin-right: 20px;"/>
            <input type="button" value="重新输入" style="color: #1A438E"/>
        </div>
</div>
</template>
<script>
    export default {
        data: () => ({
            show3: true
        })
    }
</script>
<style>
    .title{
        border:1px  solid #B3CDE8;
        margin-bottom: 20px;
    }
    .transition-box {
        display: flex;
        flex-direction: row;
        width: 100%;
        border:1px  solid #B3CDE8;
        text-align: center;
        background:#FFFFFF;
        color:#1A438E;
    }
    .button{
        width: 100%;
        margin-top: auto;
        background-color: #D6E5F4;
    }
    .bg-purple {
        width: 10%;
        border-right:1px  solid #B3CDE8;
        padding-right: 10px;
        padding-top: 10px;

        text-align: right;
        background: #EEF7FD;
    }
    .bg-purple-light {
        background: #e5e9f2;
        margin: 5px;
        margin-left: 10px;
        margin-left: 0;
    }
    .grid-content {
        min-height: 36px;
    }
    .row-bg {
        margin-top: 10px;
        text-align: right;
    }

</style>

