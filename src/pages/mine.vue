<template>
    <div class="container">
        <NavigationBar :goback="true"  />
        <div class="content">
    <div class="head">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=753633686,14101476&fm=200&gp=0.jpg" alt="">
        <h3> {{userArr[0].username}}</h3>
    </div>
        <ul class="minelist">
                    <li @click="personals">设置个人资料
                        <span class="el-icon-arrow-right"></span>
                    </li>
                    <li>收货地址管理<span class="el-icon-arrow-right"></span></li>
                    <li>我的订单<span class="el-icon-arrow-right"></span></li>
                    <li>我的评价<span class="el-icon-arrow-right"></span></li>
                    <li>商品收藏<span class="el-icon-arrow-right"></span></li>
                    <li>店铺收藏<span class="el-icon-arrow-right"></span></li>
                    <li>浏览记录<span class="el-icon-arrow-right"></span></li>
                </ul>
        <button type="button" @click="btn" :key="Login" >{{Login ? "退出登陆" :"未登录"}}</button>
    </div>
    <TabBar />
    </div>
</template>
<script>
// import { setCookie,getCookie,delCookie } from '../../static/js/cookie.js'
import NavigationBar from '../components/navigationbar'
import TabBar from '../components/tabbar'
export default {
    name: 'mine',
    data() {
        return {
			 Login:this.$route.params.isLogin,
                user:this.$route.params.users,
                userArr:[]

        }
    },
    components: {
        NavigationBar,
        TabBar,	 
    },
    methods:{
            btn(){
                let _this = window.localStorage;
                if(this.Login == true){
                    localStorage.clear("users");
                }
                    console.log(_this.users)
                     this.$router.push({
                        name:'login',
                        params:{
                        }
                    })
            },
            personals(){
                
                     this.$router.push({
                        name:'personal',
                        params:{
                        }
                    })
            },
        },
        created(){
            let _this = window.localStorage.users
            let getUser = JSON.parse(localStorage.getItem("users"));
            if(getUser == null){
                this.userArr = [{username:"未登录"}]
            }else {
                this.userArr = getUser;
                this.Login = true            
            }
            console.log(getUser)
        }



}
</script>
<style scoped>

.content {
    text-align: center;
}
.head {
    width: 100%;
    height: 30%;
    padding-top: 5%;
    background: #eeeeee;
}
.head p {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
}
.head img {
    width: 50%;
    height:80%;
    border-radius: 50%;
}
.minelist {
    margin-top: 10px;
}
.minelist li {
    text-align: left;
    padding: 15px 0 15px 20px;
    border-top: 1px solid #eeeeee;
    position: relative;
}
.minelist li:last-child {
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 25px;
}
.minelist li span {
    width: 10px;
    position: absolute;
    right: 10px;
}
.Login {
    width: 70%;
    padding: 10px 0;
    border-radius: 5px;
    background: rgb(167, 57, 40);
}
.register {
    width: 70%;
    padding: 10px 0;
    border-radius: 5px;
    background: rgb(60, 179, 113);
}
button {
   
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 微软雅黑;
    color: #eeeeee;
    padding: 5px 50px;
    margin: 5px;
    word-break: break-word;
    background: #13D1Be;
    border-radius: 5px;
}

</style>
