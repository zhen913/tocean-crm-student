<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">综合考评分查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips" style="text-align: right; height: 35px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="班级：">
                    <el-select v-model="value1" placeholder="请选择" style="width: 120px;">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="学员：">
                    <el-input v-model="formInline.user" style="width: 120px;"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="title">
            <el-table :data="tableData3" height="250" border style="width: 100%; font-size: 10px;">
                <el-table-column prop="number" label="序号" width="60"></el-table-column>
                <el-table-column prop="name" label="学员" width="70"></el-table-column>
                <el-table-column prop="class" label="班级" width="70"></el-table-column>
                <el-table-column prop="kqdeduction" label="考勤扣分" width="80"></el-table-column>
                <el-table-column prop="wjdeduction" label="违纪扣分" width="80"></el-table-column>
                <el-table-column prop="bybonus" label="表扬加分" width="80"></el-table-column>
                <el-table-column prop="bjkpbonus" label="班级考评加分" width="100"></el-table-column>
                <el-table-column prop="original" label="原始分" width="70"></el-table-column>
                <el-table-column prop="zyquality" label="职业素质分" width="90"></el-table-column>
                <el-table-column prop="propoints" label="项目分" width="70"></el-table-column>
                <el-table-column prop="operation" label="作业分" width="70"></el-table-column>
                <el-table-column prop="originals" label="原始分" width="70"></el-table-column>
                <el-table-column prop="technical" label="技术能力分" width="90"></el-table-column>
                <el-table-column prop="communication" label="沟通能力分" width="90"></el-table-column>
            </el-table>
            <div style="margin-top: 0;padding-top: 0;">
            </div>
        </div>
        <div class="plugins-tips" style="text-align: center;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 50, 100, 200, 300, 500]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="10000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                options: [{
                    value: '选项1', label: '一班'
                }, {
                    value: '选项2', label: '二班'
                }, {
                    value: '选项3', label: '三班'
                }, {
                    value: '选项4', label: '四班'
                }, {
                    value: '选项5', label: '五班'
                }],
            }
        },
        methods:{
            onSubmit(){
                console.log('submit!');
            }
        }
    }
</script>
