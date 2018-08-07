<template>
    <div class="container">
        <NavigationBar />
        <div class="content">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img class="img" src="http://p1.meituan.net/600.600/deal/3744e33490365972c0dd3bc6eda19822297065.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/600.600/deal/00ebe526cc6c81f9975bcc6812351677442413.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/600.600/deal/073ccec701c77632bcae2c4830e0d8a5501930.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/600.600/deal/00ebe526cc6c81f9975bcc6812351677442413.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/600.600/deal/e5946f7b106c55acdeb1fca9aeadcde2452100.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/600.600/deal/f09c70d4435c668aec11d69c35518e32366680.jpg@220w_125h_1e_1c" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
            <h2>推荐菜</h2>
            <ul class="food-list" >
                <li v-for="(item,index) in infosList" :key="index">
                    <ul class="sub-list">
                        <li v-for="(foods,index) in item.list" :key="index" class="foods-list"   @click="goDetails" >
                            <div class="imgIfo" ><img :src="foods.img"></div>
                            <div class="infos">
                                <p>{{foods.name}}</p>
                                <p>
                                    <span >人均:</span>
                                    <span>￥</span>
                                    <span>{{foods.price}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <TabBar />
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
import TabBar from '../components/tabbar'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'home',
    data() {
        return {
            val:' ',
            infosList:[],
            swiperOption: {
            loop: true,
            pagination: ".swiper-pagination",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        }
        }
    },
    created(){
        this.$axios.get('../../static/json/data.json')
        .then(res => {            
            this.infosList = res.data.foodClassify;            
        })
        .catch(error => {
            console.log(error);            
        })
    },
    components: {
        NavigationBar,
        TabBar,
        swiper,
        swiperSlide
    },
    methods: {
        goDetails() {
            // 进入详情页
            this.$router.push({
                name: 'details',
                params: {msg: this.val}
            });
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style scoped>
.content {
    text-align: center;
}
.sub-list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.img{
    width: 99%;
    height: 160px;
}
.sub-list li{
    width: 48%;
    cursor: pointer;  
}
.sub-list li img{
    width: 100%;
}
p {
    font-size: 16px;
}
span {
    font-size: 5px;
}

</style>