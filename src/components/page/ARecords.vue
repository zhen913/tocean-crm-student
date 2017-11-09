<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">学员考勤信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips" style="text-align: right">
            <input type="button" value="提交" style="color: #1A438E"/>
        </div>
        <div class="title">
            <div style="margin-top: 0;padding-top: 0;">
                <el-button @click="show3 = !show3" class="button" style="margin-right: auto">
                    <el-breadcrumb separator=" ">
                        <el-breadcrumb-item style="color:#D1E2F2;font-size:0.8em">学员考勤信息列表</el-breadcrumb-item>
                        <el-breadcrumb-item>（+点击标题栏展开）</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-button>
                <div>

                </div>
            </div>
        </div>
        <div class="plugins-tips" style="text-align: center;">
            <input type="button" value="确认提交" style="color: #1A438E;margin-right: 20px;"/>
            <input type="button" value="重新输入" style="color: #1A438E"/>
        </div>
    </div>
</template>
