<template>

    <div>
        <div class="plugins-tips">
                <el-breadcrumb>当前功能：<b>调查列表管理</b></el-breadcrumb>
        </div>
        <div class="plugins-tips" style="margin-top: 0;padding-top: 0;">
            <el-button @click="show11 = !show11" class="button" style="margin-left: auto;">
                <el-breadcrumb separator=" ">
                    <el-breadcrumb-item style="color:#D1E2F2;font-size:0.8em">调查列表</el-breadcrumb-item>
                    <el-breadcrumb-item>(+单击标题栏展开)</el-breadcrumb-item>
                </el-breadcrumb>
            </el-button>
            <el-main v-show="show11">
                <table>
                    <tr>
                        <th>序号</th>
                        <th>调查名称</th>
                        <th>调查内容</th>
                        <th>考评对象</th>
                        <th>调查时间</th>
                    </tr>
                </table>
            </el-main>
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

