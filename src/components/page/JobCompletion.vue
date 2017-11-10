<template>
    <div class="con">
        <div class="con-1">
            <p class="dq">当前功能:</p>
            <P class="name">作业信息查询</P>
        </div>

        <div class="con-2">
            <el-form :inline="true" :model="formInline">
                <el-form-item label="班级：">
                    <el-select v-model="formInline.banji" placeholder="">
                        <el-option label="信管" value="xingguang"></el-option>
                        <el-option label="软件" value="ruanjian"></el-option>
                        <el-option label="计应" value="jiying"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>
<style>

    .con-1{
        background-color: #EEF7FD;
        display: flex;
        flex-direction: row;
        height: 36px;
        line-height: 36px;
        border: 1px solid #B3CDE8;
    }
    .dq{
        color: #1A438E;
        font-size: 10px;
    }
    .name{
        color: #1A438E;
        font-size: 20px;
        font-weight: 800;
        padding-left: 10px;
    }
    .con-2{
        margin-top: 10px;
        background-color: #EEF7FD;
        border: 1px solid #B3CDE8;
        height: 36px;
        line-height: 36px;
    }
</style>
