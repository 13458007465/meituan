<template>
    <div class="container">
        <NavigationBar :goback="true" />
        <div class="content">
            {{val}}
	<swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img class="img" src="http://p0.meituan.net/deal/7954c7031d19be00f8e2d14972d45a8b145608.jpg@600w_600h_1l" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p1.meituan.net/deal/952be922fa5db57aa2045feb4888728f467204.jpg@600w_600h_1l" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p1.meituan.net/deal/abd973d42b8321e6cbf66da0e69e1909534776.jpg@600w_600h_1l" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/deal/33ce65443a98f315155d23d02f87e716509335.jpg@600w_600h_1l" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p1.meituan.net/deal/274ff8ad3d1ebb9e10ffed659e699525105305.jpg@600w_600h_1l" alt=""></swiper-slide>
        <swiper-slide><img class="img" src="http://p0.meituan.net/deal/cbaf2a104e243ca65b669570756c66e0555854.jpg@600w_600h_1l" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
	<div>
		行大田牛排海鲜自助（凯德广场店）
		<img class="imgs" src="http://p1.meituan.net/deal/3e143a4a233b44a8ca83e1f9d3d11826354717.jpg@380w_214h_1e_1c" alt="">
		<el-rate
			v-model="value5"
			disabled
			show-score
			text-color="#ff9900"
			score-template="{value}">
		</el-rate>
		<hr color="#ccc" />
		<p>地址：成华区万科路9号凯德广场3层</p>
		<p>电话：028-83255939</p>
		<p>营业时间：周一至周日 11:00-14:30 17:00-21:00 非营业时段 2018-02-15至2018-02-15 全天</p>
		<hr color="#ccc" />
		<p><Icon type="ios-wifi-outline" /></p>
		<p>提供WIFI</p>
	</div>
    <el-tag>空调</el-tag>
    <el-tag type="success">干净</el-tag>
    <el-tag type="info">卫生</el-tag>
    <el-tag type="warning">实惠</el-tag>
    <el-tag type="danger">好吃</el-tag>
        </div>
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'Details',
    data() {
        return {
			value5: 4.2,
			val: this.$route.params.msg,
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
    components: {
		NavigationBar,
		 swiper,
        swiperSlide
	},
	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>
<style scoped>

.content{
    height: calc(100% - 64px);
    overflow-y: scroll;
}
.img{
    width: 98%;
    height: 250px;
}
.imgs {
	width: 80%;
	height: 60%;
}
</style>
