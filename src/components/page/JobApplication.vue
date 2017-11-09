<template>
    <div>

        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">就业申请信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="plugins-tips" style="text-align:left">
            <label>你已经提交信息</label>
        </div>

        <div class="title">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                        申请列表（+点击标题栏展开）
                    </template>

                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="number"
                            label="学号"
                            width="80">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="80">
                        </el-table-column>
                        <el-table-column
                            prop="class"
                            label="班级"
                            width="180">
                        </el-table-column>

                        <el-table-column
                            prop="direction"
                            label="期望就业方向"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="期望就业地点"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="期望推荐时间"
                            width="200">

                        </el-table-column>
                        <el-table-column
                            prop="tuijian"
                            label="是否需要拓胜推荐"
                        >
                        </el-table-column>

                    </el-table>


                </el-collapse-item>
            </el-collapse>



            <div style="margin-top: 0;padding-top: 0;"></div>
        </div>
        <div class="plugins-tips" style="text-align: center;">
            <input type="button" value="确认提交" style="color: #1A438E;margin-right: 20px;"/>

        </div>
    </div>
</template>



<script>
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";

    export default {
        components: {ElFormItem}, data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    number:'1',
                    name: '徐子荣',
                    class: '信管',
                    direction: '前端',
                    address:'广州',
                    time:'2017-09-10',
                    tuijian:'是'


                }, {
                    number:'2',
                    name: '杨紫',
                    class: '信管',
                    direction: '前端',
                    address:'广州',
                    time:'2017-09-10',
                    tuijian:'是'
                }, {
                    number:'3',
                    name: '周杰伦',
                    class: '信管',
                    direction: '前端',
                    address:'广州',
                    time:'2017-09-10',
                    tuijian:'是'

                }],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value6: ''

            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
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

