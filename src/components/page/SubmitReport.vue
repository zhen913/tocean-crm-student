<template>

    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">调查列表管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips" style="margin-top: 0;padding-top: 0;">
            <el-button @click="show11 = !show11" class="button" style="margin-left: 0;margin-right: 0;">
                <el-breadcrumb separator=" ">
                    <el-breadcrumb-item style="color:#D1E2F2;font-size:0.8em">调查列表</el-breadcrumb-item>
                    <el-breadcrumb-item>(+单击标题栏展开)</el-breadcrumb-item>
                </el-breadcrumb>
            </el-button>
            <div v-show="show11" style="margin-top: 10px;color:#20a0ff">
                <el-table border style="background:#EEF7FD;color:#20a0ff">
                    <el-table-column label="序号" width="180"></el-table-column>
                    <el-table-column label="调查名称" width="180"></el-table-column>
                    <el-table-column label="调查内容" width="180"></el-table-column>
                    <el-table-column label="考评对象" width="180"></el-table-column>
                    <el-table-column label="调查时间" ></el-table-column>
                </el-table>
            </div>
        </div>
    </div>

</template>

<script type="text/javascript">
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    export default {
        components: {ElButton}, data: () => ({
            show11: true
        })
    }
</script>

<style scoped>
    table th{
        padding: 5px;
        font-family: verdana,arial,sans-serif;
        font-size:15px;
        width: 200px;
        background: #B3CDE8;
    }
    .button{
        width: 100%;
        margin-top: auto;
        background-color: #D6E5F4;
    }
</style>

