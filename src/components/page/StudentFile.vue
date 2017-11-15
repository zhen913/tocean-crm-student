<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">学员信息查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="plugins-tips" style="text-align: right; height: 150px;">
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

                <el-form-item label="性别：">
                    <el-select v-model="value3" style="width: 90px;">
                        <el-option label="男" value="man"></el-option>
                        <el-option label="女" value="women"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="毕业学校：">
                    <el-input v-model="formInline.school" style="width: 180px;"></el-input>
                </el-form-item>

                <el-form-item label="院系：">
                    <el-input v-model="formInline.departments" style="width: 150px;"></el-input>
                </el-form-item>

                <el-form-item label="专业：">
                    <el-input v-model="formInline.majors" style="width: 150px;"></el-input>
                </el-form-item>

                <el-form-item label="学历：">
                    <el-select v-model="value4" style="width: 90px;">
                        <el-option label="硕士" value="proj1"></el-option>
                        <el-option label="本科" value="proj2"></el-option>
                        <el-option label="大专" value="proj3"></el-option>
                        <el-option label="高中" value="proj4"></el-option>
                        <el-option label="其他" value="proj5"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="电话：">
                    <el-input v-model="formInline.telephone" style="width: 150px;"></el-input>
                </el-form-item>

                <el-form-item label="就业薪资：">
                    <el-input v-model="formInline.wages1" style="width: 100px;"></el-input>
                    <label>-</label>
                    <el-input v-model="formInline.wages2" style="width: 100px;"></el-input>
                </el-form-item>

                <el-form-item label="就业公司：">
                    <el-input v-model="formInline.company" style="width: 120px;"></el-input>
                </el-form-item>

                <el-form-item label="就业职位：">
                    <el-input v-model="formInline.position" style="width: 120px;"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                    <el-button type="primary" @click="onSubmit">导出Excel</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="title">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">学员信息列表（+点击标题栏展开）</template>
                    <el-table :data="tableData3" height="250" border style="width: 100%">
                        <el-table-column prop="number" label="序号" width="80"></el-table-column>
                        <el-table-column prop="name" label="学员名称" width="120"></el-table-column>
                        <el-table-column prop="studentid" label="学号" width="150"></el-table-column>
                        <el-table-column prop="class" label="班级" width="150"></el-table-column>
                        <el-table-column prop="sex" label="性别" width="100"></el-table-column>
                        <el-table-column prop="background" label="学历" width="100"></el-table-column>
                        <el-table-column prop="rxtelephone" label="入学时联系电话" width="180"></el-table-column>
                        <el-table-column prop="bytelephone" label="毕业时联系电话" width="180"></el-table-column>
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
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    export default {
        components: {ElInput}, data() {
            return {
                formInline: {
                    user: '',
                    school:'',
                    departments:'',
                    majors:'',
                    telephone:'',
                    wages1:'',
                    wages2:'',
                    company:'',
                    position:''
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
                value3: '',
                value4: ''
            }
        },
        methods:{
            onSubmit(){
                console.log('submit!');
            }
        }
    }
</script>
