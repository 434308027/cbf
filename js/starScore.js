function scoreFun(object,opts){
	// 默认属性

 
      // show方法
		  function show(num,obj){
		  	var n=parseInt(num)+1;
		  	var lefta=num*fen_d;
		  	var ww=fen_d*n;
		  	var scor=preA*n;                        // 评分
		  	(len>5)?atu=options.types[parseInt(num)]:atu=options.types[parseInt(num)+10];       // 用户态度
		  	object.find("a").removeClass("clibg");  // 清除所有a的“clibg”类
		  	obj.addClass("clibg");                  // 给当前a添加“clibg”类
		  	obj.css({"width":ww,"left":"0"});       // 给当前a添加宽度“ww”和left值
		  	countScore.text(scor);                  // 显示评分
		  	atti.text(atu);                        // 显示用户态度
		  }
		};