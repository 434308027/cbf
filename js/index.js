//服务器地址
var site = 'http://52.80.81.212:9333';
$(function(){
	//获取 rem
	var html=document.documentElement;
    var width=html.getBoundingClientRect().width;
    html.style.fontSize=width/15+'px';
})
    //首页banner轮播
    function banner(){
    	var mySwiper = new Swiper ('.banner', {
	        loop: true,
	        autoplay : 4000,
	        autoplayDisableOnInteraction : false,
	        pagination: '.swiper-pagination',
	        observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	});
    }
	

	//弹窗方法
	function alerts(s){
		layer.open({
		    content: s,
		    skin: 'msg',
		    time: 2 //2秒后自动关闭
		});
	}
	function btnremove(){
		  //询问框
		  layer.open({
		    content: '你确定要删除？'
		    ,btn: ['确认', '取消']
		    ,yes: function(index){
		 		$.ajax({
		    		url:site+'/upkeep/delOrder',
		    		type:'post',
		    		dataType:'json',
		    		data:{userId:loca_fetch('userid'),orderId:loca_fetch('moderid')},
		    		success:function(data){
		    			console.log(data)
		    			location.reload();
		    		}
		   		})
		    layer.close(index);
		    }
		  });
	}
	// 本地缓存
	function loca_save (STORAGE_KEY,items) {
	    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
	function loca_fetch (STORAGE_KEY) {
	    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
	}
	//时间戳转换时间
	function time(){
		Vue.filter('time',
			function(value) {
			var date = new Date(value);
			Y = date.getFullYear(),
			m = date.getMonth() + 1,
			d = date.getDate(),
			H = date.getHours(),
			i = date.getMinutes(),
			s = date.getSeconds();
			if (m < 10) {
			m = '0' + m;
			}
			if (d < 10) {
			d = '0' + d;
			}
			if (H < 10) {
			H = '0' + H;
			}
			if (i < 10) {
			i = '0' + i;
			}
			if (s < 10) {
			s = '0' + s;
			}
	//		var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
			var t = Y + '-' + m + '-' + d;
			return t;
		});
	}

	function getMyDate(str){  
        var oDate = new Date(str),  
        oYear = oDate.getFullYear(),  
        oMonth = oDate.getMonth()+1,  
        oDay = oDate.getDate(),  
        oHour = oDate.getHours(),  
        oMin = oDate.getMinutes(),  
        oSen = oDate.getSeconds(),  
      	oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间
//      oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay)//最后拼接时间  
        return oTime;  
    }; 
    //补0操作
  function getzf(num){  
      if(parseInt(num) < 10){  
          num = '0'+num;  
      }  
      return num;  
  }