<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">分组讨论查询</el-breadcrumb-item>
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

                <el-form-item label="分组：">
                    <el-select v-model="value3" style="width: 90px;">
                        <el-option label="第一组" value="group1"></el-option>
                        <el-option label="第二组" value="group2"></el-option>
                        <el-option label="第三组" value="group3"></el-option>
                        <el-option label="第四组" value="group4"></el-option>
                        <el-option label="第五组" value="group5"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="项目经理：">
                    <el-input v-model="formInline.user" style="width: 120px;"></el-input>
                </el-form-item>

                <el-form-item label="时间：">
                    <el-date-picker
                        v-model="value2"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="title">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">分组讨论信息列表（+点击标题栏展开）</template>
                    <el-table :data="tableData3" height="250" border style="width: 100%">
                        <el-table-column type="selection" width="70"></el-table-column>
                        <el-table-column prop="number" label="序号" width="80"></el-table-column>
                        <el-table-column prop="class" label="班级" width="120"></el-table-column>
                        <el-table-column prop="name" label="学员" width="120"></el-table-column>
                        <el-table-column prop="dates" label="演讲日期" width="160"></el-table-column>
                        <el-table-column prop="starttime" label="演讲内容" width="200"></el-table-column>
                        <el-table-column prop="endtime" label="项目经理" width="120"></el-table-column>
                        <el-table-column prop="state" label="评价" width="100"></el-table-column>
                        <el-table-column prop="state" label="评分" width="90"></el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
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
                value1: '',
                value2: '',
                value3: ''
            }
        },
        methods:{
            onSubmit(){
                console.log('submit!');
            }
        }
    }
</script>
