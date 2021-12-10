$(function(){
  getUserinfo()
})

// 获取用户的基本信息
function   getUserinfo(){
   $.ajax({
       method:'GET',
       url:'/my/userinfo',
      //  headers 就是请求头配置对象
       headers:{
          Authorization:localStorage.getItem('token')|| ''
       },
       success:function(res){
          console.log(res)
       }
   })
}