<template>
    <div>

        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">就业申请信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="plugins-tips" value="你已经提交了就业信息！" style="text-align: right">

        </div>
        <div class="title">
            <div style="margin-top: 0;padding-top: 0;">
                <el-button @click="show3 = !show3" class="button" style="margin-right: auto">
                    <el-breadcrumb separator=" ">
                        <el-breadcrumb-item style="color:#D1E2F2;font-size:0.8em">申请列表</el-breadcrumb-item>
                        <el-breadcrumb-item>（+点击标题栏展开）</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-button>

                <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="class"
                        label="班级"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="direction"
                        label="期望就业方向">
                        <el-select v-model="value" placeholder="Android">
                            <i class="el-icon-caret-bottom"></i>
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">

                            </el-option>
                        </el-select>

                    </el-table-column>

                    <el-table-column
                        prop="address"
                        label="期望就业地点">
                        <el-select v-model="value" placeholder="广州">
                            <i class="el-icon-caret-bottom"></i>
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-table-column>

                    <el-table-column
                        prop="time"
                        label="期望推荐时间">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-table-column>
                    <el-table-column
                        prop="tuoshen"
                        label="是否需要拓胜推荐">
                        <i class="el-icon-caret-bottom"></i>

                        <el-select v-model="value" placeholder="是">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-table-column>



                </el-table>





            </div>
        </div>



        <div class="plugins-tips" style="text-align: center;">
            <input type="button" value="确认提交" style="color: #1A438E;margin-right: 20px;"/>

        </div>
    </div>
</template>





<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: 'Android'
                }, {
                    value: '选项2',
                    label: 'Java'
                }, {
                    value: '选项3',
                    label: 'php'
                }, {
                    value: '选项4',
                    label: 'python'
                }, {
                    value: '选项5',
                    label: 'C++'
                }, {
                    value: '选项3',
                    label: 'C#'
                }, {
                    value: '选项3',
                    label: '测试方向'
                }],
                value: ''
            }
        }
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

