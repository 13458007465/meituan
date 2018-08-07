<template>
    <div class="container">      
        <NavigationBar />
         <div class="content">
           <form id="main" v-cloak>
  <div class="bar">
    <input type="text" v-model="searchString" placeholder="搜索" />
  </div>
  <ul>
    
    <li v-for="article in filteredArticles" :key="article">
      <a v-bind:href="article.url" rel="external nofollow" >
        <img v-bind:src="article.image" />
        </a>
      <p>
        {{article.title}} 
      </p>
      <p>
        <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
        </el-rate>
      </p>
    </li>
  </ul>
</form>
         </div>
        <TabBar/>   
    </div>
</template>
<script>
    import TabBar from '../components/tabbar'
    import NavigationBar from '../components/navigationbar'
    export default{
        name:'shoppingcar',
        components:{
            TabBar,
            NavigationBar
            },
        data(){
            return {
               value5: 4.2,
                searchString:"",
                articles: [
                    {
                        "title": "上黄焖鸡饭",
                        "url": "http://cd.meituan.com/meishi/40970877/",
                        "image": "http://p0.meituan.net//deal/5772a881628d910d78853bd596cb97c6348754.jpg@188w_106h_1e_1c"
                    },
                    {
                        "title": "青柠记忆泰式海鲜火锅",
                        "url": "http://www.meituan.com/meishi/4044593/",
                        "image": "http://p0.meituan.net/600.600/mogu/456137b7f1ef16e1c068186de3e915fd357404.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "城门口老火锅",
                        "url": "http://www.meituan.com/meishi/1800985/",
                        "image": "https://img.meituan.net/600.600/msmerchant/c5ffc26c023b426e6237cd1399deb7f8103912.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "早安巴黎",
                        "url": "http://www.meituan.com/meishi/789370/",
                        "image": "http://p1.meituan.net/600.600/merchantpic/7feea346b28c3e182f26206594757b4f376969.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "行大田牛排海鲜自助",
                        "url": "http://www.meituan.com/meishi/5218010/",
                        "image": "http://p1.meituan.net/600.600/deal/3e143a4a233b44a8ca83e1f9d3d11826354717.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "过桥郎米线",
                        "url": "http://www.meituan.com/meishi/41996636/",
                        "image": "http://p0.meituan.net/600.600/deal/00ebe526cc6c81f9975bcc6812351677442413.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "玛喜达韩国料理",
                        "url": "http://www.meituan.com/meishi/41167363/",
                        "image": "http://p1.meituan.net/600.600/apiback/7bdae03b40e77a9bd5cf62c2936eecbf119623.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "烈焰炙烤牛排",
                        "url": "http://www.meituan.com/meishi/5412333/",
                        "image": "http://p0.meituan.net/600.600/deal/da2040da7448390f709f4625be07cedc402533.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "大蓉和",
                        "url": "http://www.meituan.com/meishi/6178057/",
                        "image": "http://p1.meituan.net/600.600/apiback/f43c8f028bfc02938d5b4884590f645e186220.jpg@220w_125h_1e_1c"
                    },
                    {
                        "title": "碳来香三国烤肉火锅",
                        "url": "http://www.meituan.com/meishi/774162/",
                        "image": "http://p1.meituan.net/600.600/deal/b687a976a0edb5d052b7bb2f7fd6596b115158.jpg@220w_125h_1e_1c"
                    }
                ]
             }
         },
        computed: {
            filteredArticles: function () {
              var articles_array = this.articles,
                searchString = this.searchString;
              if(!searchString){
                return articles_array;
              }
              searchString = searchString.trim().toLowerCase();
              articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                  return item;
                }
              })
              return articles_array;
            }
          },       
}

</script>
    
<style scoped>
    [v-cloak]{
      display: none;
    }
    *{
      padding: 0;
      margin: 0;
    }
    body{
      font: 15px/1.3 'Open Sans' sans-serif;
      color: #13D1BE;
      text-align: center;
    }
    a, a:visited{
      outline: none;
      color: 389dc1;
    }
    a:hover{
      text-decoration: none;
    }
    section,footer,header, aside, nav{
      display: block;
    }
    /* 搜索表单样式 */
    .bar{
      background-color: #13D1BE;
       background-image:-webkit-linear-gradient(top, #13D1BE, #13D1BE);
      background-image:-moz-linear-gradient(top, #13D1BE, #13D1BE);
      background-image:linear-gradient(top, #13D1BE, #13D1BE);
      box-shadow: 0 1px 1px #ccc;
      border-radius: 5px;
      width: 315px;
      padding: 5px;
      margin: 10px auto 20px;
      position: relative;
    }
    .bar input{
      background: #fff no-repeat 13px 13px;
       background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);
       border: none;
       width: 100%;
       line-height: 19px;
       padding: 11px 0;
       border-radius: 2px;
       box-shadow: 0 2px 8px #c4c4c4 inset;
       text-align: left;
       font-size: 14px;
       font-family: inherit;
       color: #222;
       font-weight: bold;
       text-indent: center;
       outline: none;
       text-align: center;
    }
    input:focus{
      box-shadow: -2px -2px 3px hsla(100, 0%, 0%, 0.3)
    }
    ul{
      list-style: none;
      width: 428px;
      margin: 0 auto;
      text-align: left;
    }
    ul li{
      border-bottom: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
    }
    ul li img{
      width:40%;
      height:100%;
      float:left;
      border:none;

    }
    ul li p{
      margin: 0 0 ;
      font-weight: bold;
      padding-top: 40px;
      color:#6e7a7f;
      
    }
 
  


</style>