<template>

    <div>
        <div>
                <el-breadcrumb>当前功能：<b>调查列表管理</b></el-breadcrumb>
        </div>
        <div class="content-title">
            <el-breadcrumb-item><b>调查列表</b>(+ 单击标题栏展开)</el-breadcrumb-item>
            <el-table>
                <el-table-column prop="number" label="序号">
                </el-table-column>
                <el-table-column prop="name" label="调查名称">
                </el-table-column>
                <el-table-column prop="content" label="调查内容">
                </el-table-column>
                <el-table-column prop="person" label="考评对象">
                </el-table-column>
                <el-table-column prop="time" label="调查时间">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style scoped>
    .content-title{
        color: #2a88bd;
        border-style: solid;
        border-color: #000;
    }
</style>

