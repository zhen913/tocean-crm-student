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

        <div class="plugins-tips">
            <div style="margin-top: 0;padding-top: 0;">
                <el-button @click="show3 = !show3" class="button" style="margin-right: auto">
                    <el-breadcrumb separator=" ">
                        <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">基本资料</el-breadcrumb-item>
                        <el-breadcrumb-item>（+点击标题栏展开）</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-button>
                <el-collapse-transition>
                    <div v-show="show3" style="margin:5px 15px;">
                        <div class="transition-box">
                            <el-form :inline="true">
                            简历：<input type="text"/><input type="button" value="预览"/>
                            </el-form>
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
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color:#D6E5F4;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .button{
        width: 100%;
        background-color: #D6E5F4;

    }
</style>

