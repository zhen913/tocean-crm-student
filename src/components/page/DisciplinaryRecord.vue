<template>
    <div>
        <div class="gn">
        <p class="t-dq">当前功能：</p>
        <p class="t-zy">学员违纪信息查询</p>
        </div>
        <div class="biao">
            <div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="班级">
                        <el-select v-model="formInline.banji" placeholder="">
                            <el-option label="信管" value="xingguang"></el-option>
                            <el-option label="软件" value="ruanjian"></el-option>
                            <el-option label="计应" value="jiying"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学员">
                        <el-input v-model="formInline.xueyuan" placeholder=""/>
                    </el-form-item>
                    <el-form-item>
                        <div class="block">
                            <span class="demonstration">时间：</span>
                            <el-date-picker
                                v-model="value6"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="but-1">
                            <el-button size="mini" class="but">查询</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>


        <div>
            <el-collapse v-model="activeNames" accordion>
                <el-collapse-item title="班级考评积极性列表（+单击标题栏展开）" name="1">
                    <div>
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                                prop="xuehao"
                                label="学号"
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="xueyuan"
                                label="学员"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="banji"
                                label="班级"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="shijina"
                                label="违纪时间"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="qingkuan"
                                label="情况"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="taidu"
                                label="学员违纪态度"
                                >
                            </el-table-column>

                        </el-table>
                    </div>

                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="jdt">

            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<style>
    .gn {
        background-color: #EEF7FD;
        height: 36px;
        display: flex;
        flex-direction: row;
        line-height: 36px;
        border: 1px solid #B3CDE8;
        padding-left: 10px;
    }

    .t-dq {
        color: #1A438E;
        font-size: 10px;
    }

    .t-zy {
        font-size: 20px;
        font-weight: 800;
        color: #1A438E;
    }

    .biao {
        margin-top: 10px;
        text-align: center;
    }

    .but {
        margin-top: 8px;
        margin-bottom: 8px;
        width: 70px;
        margin-right: auto;

    }
    .jdt{
        text-align: center;
    }

</style>
<script>
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";

    export default {
        components: {ElFormItem}, data() {
            return {
                activeNames: ['1'],
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    xuehao: '1',
                    xueyuan: '小丘',
                    banji: '信管',
                    shijina:'2017-09-10',
                    qingkuan:'早上迟到',
                    taidu:'态度恶劣'

                }, {
                    xuehao: '2',
                    xueyuan: '小李',
                    banji: '软件',
                    shijina:'2017-09-15',
                    qingkuan:'旷课',
                    taidu:'态度良好'
                }, {
                    xuehao: '3',
                    xueyuan: '小陈',
                    banji: '信管',
                    shijina:'2017-5-4',
                    qingkuan:'早上迟到',
                    taidu:'态度良好'
                }, {
                    xuehao: '4',
                    xueyuan: '小林',
                    banji: '计应',
                    shijina:'2017-6-6',
                    qingkuan:'旷课',
                    taidu:'态度良好'
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


