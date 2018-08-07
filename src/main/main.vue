<template>
    <div>
        <h3>所有注册用户</h3>
        <ul>
            <li v-for="item in list" :key="item">
                {{item.username}}
            </li>
        </ul>
    </div>
</template>

<style>
    ul{padding: 0;}
    ul li{list-style: none;}
</style>

<script>
    export default{
        name:'main',
        data(){
            return{
                list: ''
            }
        },
        mounted(){
            this.$axios.get('../../static/json/logins.json').then((res)=>{
                this.list = res.data
                console.log(res)
            })
        }
    }
</script>