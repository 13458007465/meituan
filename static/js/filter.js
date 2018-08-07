// ajax请求
var headerParam={
    'Content-Type':'application/x-www-form-urlencoded;',
  };
  var ajax = function(that, url, params,method,success){
  
      if(method=='GET'){
          that.axios({
              method: 'get',
              url: url,
              params: params,
          }).then((response) => {
              if(typeof(success)==="function"){
                  success(response.data);
              }else{
                  that.$notify({
                      title: '提示',
                      message: response.data.message,
                      type: 'warning',
                      duration: '2000'
                  })
              }
          })
      }else{
          params = that.querystring.stringify(params);
          that.axios({
              method: 'post',
              url: url,
              data: params,
              header: headerParam,
          }).then((response)=>{
              if(typeof(success)==="function"){
                  success(response.data);
              }else{
                  that.$notify({
                      title: '提示',
                      message: response.data.message,
                      type: 'warning',
                      duration: '2000',
                  })
              }
          })
      }
  };
  // 发送短信
  var sendCode=function(that,params,success){
    ajax(that,that.extendApi.sedMsssss,params,'post',function(res){
        if(typeof(success)=='function'){
            success(res);
        };
        if(res.code==200){
            that.$notify({
                title: '提示',
                message: "发送成功",
                type: 'success',
                duration: '2000'
            });
            that.codeState=1;
            that.secondNum=60;
            clearInterval(that.reltime);
            that.reltime=setInterval(function(){
                that.secondNum--;
                if(that.secondNum==0){
                    clearInterval(that.reltime);
                    that.codeState=2;
                    that.secondNum=60;
                }
            },1000);
        }
    });
  };
  // 发送邮件
  var sendEmail=function(that,params,success){
    ajax(that,that.extendApi.sedEmmmmm,params,'post',function(res){
        if(typeof(success)=='function'){
            success(res);
        }
        if(res.code==200){
            that.$notify({
                title: '提示',
                message: "发送成功",
                type: 'success',
                duration: '2000'
            });
            that.codeState=1;
            that.secondNum=60;
            clearInterval(that.reltime);
            that.reltime=setInterval(function(){
                that.secondNum--;
                if(that.secondNum==0){
                    clearInterval(that.reltime);
                    that.codeState=2;
                    that.secondNum=60;
                }
            },1000);
        }
    });
  };
  var subRegist=function(that, params,success){
      ajax(that,that.extendApi.newRegist,params,'POST',function(data){
          if(typeof(success)=="function"){
              success(data);
          }
      })
  };
  var sublogin=function(that,pageindex,params,success){
      ajax(that,that.extendApi.newLogin,params,'POST',function(res){
          if(typeof(success)=="function"){
              success(res);
      }
      if(res.code==200){
          var data = res.data;
          ajax(that,that.extendApi.getUserInfo,'','',function(data){
              if(data.code==200){
                  that.username=data.data.base.username;
                  if(that.username){
                      that.username=data.data.username;
                  }
              }
              // else if(data.code==-2){
              //     that.$router.push({path:'/index'});
              //     that.$notify({
              //         title: '提示',
              //         message: "请重新登录",
              //         type: 'warning',
              //         duration: '1000'
              //     });
              // }
          })
          }else{
              that.$notify({
                  title: '提示',
                  message: res.message,
                  type: 'warning',
                  duration: '2000',
              })
          }
      })
  };
  export{
      ajax, sendCode, sendEmail, subRegist, sublogin
  }