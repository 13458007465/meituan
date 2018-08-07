<template>
    <div class="container">
        <NavigationBar :goback="true" />
        <div class="content">
            <div class="per">
                <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            </div>
            <div>
                <p>
          性别：
          <label>男</label>
          <input  value="男"   type="radio"  v-model="checkMsg">
          <label>女</label>
          <input  value="女" type="radio"  v-model="checkMsg">
          <label>保密</label>
          <input  value="保密" type="radio"  v-model="checkMsg">
      </p>
            </div>
      <div>
          <select name="mySel" v-model="selected">
          <option value="">-请选择您所在的城市-</option>
          <option value="成都">成都</option>
          <option value="上海">上海</option>
          <option value="北京">北京</option>
          <option value="深圳">深圳</option>
          <option value="杭州">杭州</option>
          <option value="昆明">昆明</option>
      </select>
      <p>你居住的城市：{{selected}}</p>
      </div>
      <div class="block">
    <span class="demonstration">你的出生日期：</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间" class="picker">
    </el-date-picker>
    </div>
    <button type="button" @click="amend">确认修改</button>
	    </div>
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
export default {
    name: 'personal',
    data() {
        return {
			dialogImageUrl: '',
            dialogVisible: false,
            checkMsg:'',
            selected:'',
             pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        }
    },
    components: {
		NavigationBar,
		
	},
	methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      amend() {
            // 进入mine
            this.$router.push({
                name: 'mine',
                params: {

                }
            });
        }
    }
}
</script>
<style scoped>

.content{
    height: calc(100% - 64px);
    overflow-y: scroll;
}
.per p {
    margin: 10px 180px -25px 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
select {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 50%;
}
p,span {
    font-size: 15px;
    margin: 10px auto;
    left: 0;
}
button {
   
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    font-family: 微软雅黑;
    color: #eeeeee;
    padding: 5px 50px;
    margin: 60px;
    word-break: break-word;
    background: #13D1Be;
    border-radius: 5px;
}
</style>
