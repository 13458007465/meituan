<template>
    <div class="container">    
        <NavigationBar />
        <div class="content">
           <div class="deta" data-page="home">
		<!-- 筛选排序列表 -->
		<nav class="fillter"/>
			<ul class="filterSort">
				<li class="filterItem" @click="toggleFilerMenue">
					<span>{{ filterMenueChecked }}</span>
					<i class="icon arrow" :class="{checked: filterMenueShow}"></i>
				</li>
				<li class="filterItem" @click="sortSeller('salesCount', 'desc')">销量最高</li>
				<li class="filterItem" @click="sortSeller('distance', 'asc')">距离最近</li>
				<li>
					<span>筛选</span>
					<i class="icon funnel"></i>
				</li>
            </ul>
            <transition name="fade">
                <!-- 综合排序菜单 -->
                <ul class="comSort" v-show="filterMenueShow">
                    <li v-for="(btn, index) in filterMenue" @click="sortSeller(...filterMenueEvent[index], index)" :key="index">{{ btn }}</li>
                </ul>
            </transition>
            <!-- 遮罩层 -->
            <div 
                class="maskLayer"
                v-show="filterMenueShow" 
                @click="filterMenueShow = false"
            /></div>

		<!-- 商家内容部分 -->
		<div class="contents" ref="content">
            <div class="sellerCount">-- 共计 {{ sellerCount }} 个商家 --</div>
			<!-- 商家信息列表 -->
			<ul id="business">
                <seller-list 
                    v-for="seller in sellerList"
                    :seller="seller" 
                    :key="seller.id" 
                ></seller-list>
			</ul>
			<button type="button" @click="showCreateForm" class="normal">添加商家</button>
		</div>

		<!-- 表单部分 -->
		<form name="sellerInfoCreate" v-show="formShowState">
			<div class="title">商家信息创建</div>
			<div>
				<label>商家图片</label>
				<input type="url" v-model="newInfo.image">
			</div>
			<div>
				<label>商家名称</label>
				<input type="text" v-model="newInfo.name" placeholder="请填写商家名称">
			</div>
			<div>
				<label>可否自取</label>
				<label class="radio">
					是
					<input name="pickup" type="radio" :value="true" v-model="newInfo.pickup">
				</label>
				<label class="radio">
					否
					<input name="pickup" type="radio" :value="false" v-model="newInfo.pickup">
				</label>
			</div>
			<div>
				<label>月售量</label>
				<input type="number" v-model="newInfo.salesCount">
			</div>
			<div>
				<label>运送时间</label>
				<input type="number" v-model="newInfo.timeUsed">
			</div>
			<div>
				<label>距离</label>
				<input type="number" v-model="newInfo.distance">
			</div>
			<div>
				<label>起送费</label>
				<input type="number" v-model="newInfo.startFee">
			</div>
			<div>
				<label>配送费</label>
				<input type="number" v-model="newInfo.transportFee">
			</div>
			<div class="activ">
				<textarea placeholder="商家活动..." v-model="newInfo.activities"></textarea>
			</div>
			<div class="btn-group">
				<button type="button" @click="hideCreateForm">取消</button>
				<button type="button" class="comfirm" @click="createSeller">确认</button>
			</div>
		</form>
        </div>
        <TabBar/>    
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    import '../../static/js/components.js'
    export default{
        name:'shops',
        components:{
            TabBar,
            NavigationBar,
            },
        data(){
            return {
                
         // 排序菜单当前选中项
        filterMenueChecked: '综合排序',
        // 排序菜单
        filterMenue: ['综合排序','速度最快','评分最高','起送价最低','配送费最低','人气高到低','人气低到高'],
        filterMenueEvent: [
            ['giveMeMoney', 'desc'],
            ['timeUsed', 'asc'],
            ['salesCount', 'desc'],
            ['startFee', 'asc'],
            ['transportFee', 'asc'],
            ['star', 'desc'],
            ['star', 'asc']
        ],
		// 创建商家数据表单显隐状态
		formShowState: false,
		// 新增商家数据
		newInfo: {
			img: "如：http://url.jpg",
			name: "",
			pickup: false,
			salesCount: 0,
			timeUsed: 0,
			distance: 0,
			startFee: 0,
			transportFee: 0
		},
		// 原有商家数据
		sellerList: [],
        // 筛选二级导航显示状态
        filterMenueShow: false
            }
        },
        computed: {
        // 商家统计
        sellerCount() {
            return this.sellerList.length;
        }
    },
    created() {
        // axios.get('https://www.aulence.com/data/sellerInfo.json').then((resp) => {
		this.$axios.get('../../static/json/detail.json')
		.then((resp) => {
            this.sellerList = resp.data;
		})
		.catch(() => {
            throw new Error('数据请求错误！');
        });
    },
	methods: {
		// 显示创建商家数据表单
		showCreateForm() {
			this.formShowState = true;
			setTimeout(function() {
				sellerInfoCreate.scrollTop = 0;
			},0);
		},
		// 隐藏创建商家数据表单
		hideCreateForm() {
			this.formShowState = false;
		},
		// 点击确认创建商家
		createSeller() {

			// 添加编写完成的数据
			this.sellerList.push(this.newInfo);
			// 隐藏表单
			this.formShowState = false;
			// 恢复默认数据
			this.newInfo = {
				img: "http://url.jpg",
				name: "",
				pickup: false,
				salesCount: 0,
				timeUsed: 0,
				distance: 0,
				startFee: 0,
				transportFee: 0
			}
        },
        // 显隐二级筛选菜单
        toggleFilerMenue() {
            this.filterMenueShow = !this.filterMenueShow;
        },
        
        sortSeller(sortType, order, index) {
            // 根据传入的值对商家进行排序
            this.sellerList.sort((item1,item2) => {
                // 升序排序
                if(order === "asc") {
                    return item1[sortType] - item2[sortType];
                }
                // 降序排序
                else if(order === "desc") {
                    return item2[sortType] - item1[sortType];
                }
                else {
                    throw new Error('参数传入错误，请检查！');
                }
            });
            if(typeof index !== "undefined" )  {
                // 设置菜单栏第一个按钮显示排序选中项
                this.filterMenueChecked = this.filterMenue[index];
            }
            else {
                this.filterMenueChecked = '综合排序';
            }
            // 滚动条置顶
            this.$refs.content.scrollTop = 0;
            // 隐藏菜单
            this.filterMenueShow = false;
        }
    },
    }
       
</script>
<style scoped>
@import '../../static/css/sea.css';
@import '../../static/css/normalize.css';
.bus-img img {
	width: 100%;
	height: 150px;
}
.content {
    text-align: center;
}
</style>
