<template>
    <div class="container">      
        <NavigationBar :goback="true"/>
         <div class="content">
              <el-form :model="ruleForm2" status-icon :label-position="labelPosition" :rules="rules2" ref="ruleForm2" size="mini" label-width="100px" class="demo-ruleForm">
                <el-form-item label="昵称" >
                    <el-input v-model="ruleForm2.name" class="username"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="邮箱" class="email" :rules="[
                {required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}]">
                <el-input v-model="ruleForm2.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" class="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" class="checkpass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                    <el-button @click="resetForm('ruleForm2')">取消</el-button>
                </el-form-item>
            </el-form>
         </div>
        <TabBar/>   
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'register',
        components:{TabBar,NavigationBar},
            data() {
                var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
                
            };
            return {
                username:this.$route.params.username,
                labelPosition:'left',
                ruleForm2: {
                    name:'',
                    pass: '',
                    checkPass: '',
                    email: ''
                },
                rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                
                },
                form: {
                type: [],
                desc: '',
                name:'',
                }

            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    let that = this.ruleForm2;
                    let user = new Bmob.User();   
                    let _this = this;
                    // 配置用户对象
                    user.set("username", that.name);
                    user.set("password", that.pass);
                    user.set("email", that.email);
                    // console.log(that)
                    user.signUp(null,{
                        success:function(user){
                            alert("注册成功")
                            _this.$router.push({
                                name:'login',
                                params:{
                                    username:username
                                }
                            });
                        },
                        error:function(user,error){
                            switch(error.code){
                                case 202: {alert("用户名已经被注册！")}break;
                                case 203: {alert("邮箱已经被注册！"  )}break;
                                case 209: {alert("手机已经被注册！"  )}break;
                                default : {alert("注册失败！请检查注册信息！")};
                            }
                        }
                    })
                    let username = that.name;
                    
                } else {
                    alert('请输入注册信息');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.ruleForm2.domains.indexOf(item)
                if (index !== -1) {
                this.ruleForm2.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.ruleForm2.domains.push({
                value: '',
                key: Date.now()
                });
            }
        },
    }
</script>
<style scoped>
.content {
    padding: 20px;
}
.demo-ruleForm {
  margin: 25% 0;
}
.el-form-item {
    margin: 25px 0;
}
.el-checkbox {
    width: 50px;
}
</style>