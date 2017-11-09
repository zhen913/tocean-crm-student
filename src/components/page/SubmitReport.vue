<template>

    <div>
        <div class="plugins-tips">
                <el-breadcrumb>当前功能：<b>调查列表管理</b></el-breadcrumb>
        </div>
        <div class="title">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">调查列表（+点击标题栏展开）</template>
                        <el-table
                            :data="tableData3"
                            height="250"
                            border
                            style="width: 100%">
                            <el-table-column
                                prop="number"
                                label="序号"
                                width="150">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="调查名称"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="content"
                                label="调查内容"
                                width="370">
                            </el-table-column>
                            <el-table-column
                                prop="people"
                                label="考评对象"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="调查时间"
                                width="180">
                            </el-table-column>
                        </el-table>
                    </el-collapse-item>
                </el-collapse>
            <div style="margin-top: 0;padding-top: 0;">
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
