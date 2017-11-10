<template>
    <div>
        <div class="plugins-tips">
            <el-breadcrumb separator="：">
                <el-breadcrumb-item><i class="el-icon-date"></i> 当前功能</el-breadcrumb-item>
                <el-breadcrumb-item style="color:#1A438E;font-size:0.8em">调查列表管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
          <div style="text-align: right">
              <el-form :inline="true" :model="formIline" class="demo-foem-inline" >
                  <el-form-item label="班级">
                      <el-select v-model="value" placeholder="请选择">
                          <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                          </el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="学员">
                      <el-input v-model="formInline.user" placeholder="学员"></el-input>
                  </el-form-item>
              </el-form>
          </div>
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
                options: [{
                    value: '选项1',
                    label: '信管1'
                }, {
                    value: '选项2',
                    label: '信管2'
                }, {
                    value: '选项3',
                    label: '计应1'
                }, {
                    value: '选项4',
                    label: '计应2'
                }, {
                    value: '选项5',
                    label: '多媒体'
                }],
                value: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
