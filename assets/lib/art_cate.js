
$(function(){
   initArtCateList()

   // 获取文章分类 的列表
    function initArtCateList(){
      $.ajax({
         method:'GET',
         url:'/my/article/cate',
         success:function(res){
           var   htmlStr=  template('tpl-table',res)
           $('tbody').html(htmlStr)
           console.log(res)
         }
      })
    }
})