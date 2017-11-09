<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="gn"><p class="t-dq">当前功能：</p><p class="t-zy">提交项目</p></div></el-col>
            <el-col :span="24" class="tj"><div class="tj-1"><el-button size="mini" class="but">提交</el-button></div></el-col>
        </el-row>
        <el-container class="con">
            <el-header class="jb" ><div class="zl">基本资料</div><div class="zk">(+ 单击标题栏展开)</div></el-header>
            <el-main>
                <span class="no">您不是学员，不能提交项目！</span>
                <div class="biao">
                    <div class="biaoge">
                    <el-form class="biao-1" :inline="true">
                        <el-form-item label="项目：" class="name ">
                    <input type="text" class="inp"/>
                </el-form-item>
                    <el-form-item label="班级：" class="stu ">
                        <input type="text" class="inp"/>
                    </el-form-item>
                    </el-form>
                    <el-form class="biao-1" :inline="true">
                        <el-form-item label="小组：" class="name">
                            <input type="text" class="inp"/>
                        </el-form-item>
                        <el-form-item label="考评类型：" class="stu">
                            初次考评
                        </el-form-item>
                    </el-form>

                    <el-form class="biao-2">
                        <el-form-item label="源代码和文档：">
                            <input type="text" class="yl"/>
                            <input type="button" value="预览"/>
                        </el-form-item>
                    </el-form>
                    </div>
                </div>
            </el-main>
        </el-container>
        <el-col :span="24" class="tj">
            <div class="qd">
                <el-button size="mini" class="but-1">
                    确定提交
                </el-button>
                <el-button size="mini" class="but-1">
                    重新输入
                </el-button>
            </div>
        </el-col>


    </div>




</template>

<style scoped>
    .gn{
        background-color: #EEF7FD;
        height: 36px;
        display: flex;
        flex-direction: row;
        line-height: 36px;
        border: 1px solid #B3CDE8;
        padding-left: 10px;
    }
    .tj-1{
        text-align: right;
        padding-right: 10px;
        background-color: #EEF7FD;
        height: 36px;
        border: 1px solid #B3CDE8;

    }
    .t-dq{
        color: #1A438E;
        font-size: 10px;
    }
    .t-zy{
        font-size: 20px;
        font-weight: 800;
        color: #1A438E;
    }

    .tj{
        padding-top: 10px;

    }
    .but{
        margin-top: 8px;
        margin-bottom: 8px;
        width: 70px;
        margin-right: auto;
    }
    .but-1{
        margin-top: 8px;
        margin-bottom: 8px;
        width: 70px;


    }
    .jb{
        background-color:#CCDEF0;
        height: 25px;
        display: flex;
        flex-direction: row;
        line-height: 25px;
        border: 1px solid #B3CDE8;
        padding-left: 10px;
        margin-top: 10px;
    }
    .zl{
        font-size: 15px;
        font-weight: 800;
        color: #1A438E;
    }
    .zk{
        color: #1A438E;
        font-size: 10px;
    }
    .no{
        background-color:#FFEE00;
        color:#1A438E ;
        font-weight: 800;
        font-size: 15px;
    }
    .con{
        margin-top: 10px;
    }
    .qd{
        text-align: center;
        background-color: #EEF7FD;
        height: 36px;
        border: 1px solid #B3CDE8;
    }
    .biao{
        border: 1px solid #B3CDE8;

    }
    .name{
        width: 50%;
        border-right: 1px solid #8c939d;
        margin-top: 5px;
    }
    .biaoge {
        border: 1px solid #8c939d;
        margin: 15px 15px 15px 15px;
        padding-left: 10px;
    }

    .yl{
        width: 61%;
    }

</style>
