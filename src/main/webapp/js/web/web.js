$.ajax({
	url : "http://localhost:8080/newsInfo/getAllNewsInfo",
	data:{"keys":""},
	type : "get",
	dataType : "jsonp",
	success : function(data){
		alert(data);
		if(data){
			console.log(data);
		}
//		var newArray = [];
	//单击首页“待审核文章”加载的信息
//	if($(".top_tab li.layui-this cite",parent.document).text() == "待审核文章"){
//		if(window.sessionStorage.getItem("addNews")){
//			var addNews = window.sessionStorage.getItem("addNews");
//			newsData = JSON.parse(addNews).concat(data);
//		}else{
//			newsData = data;
//		}
//		for(var i=0;i<newsData.length;i++){
//    		if(newsData[i].newsStatus == "待审核"){
//				newArray.push(newsData[i]);
//    		}
//    	}
//    	newsData = newArray;
//    	newsList(newsData);
//	}else{    //正常加载信息
//		newsData = data;
//		if(window.sessionStorage.getItem("addNews")){
//			var addNews = window.sessionStorage.getItem("addNews");
//			newsData = JSON.parse(addNews).concat(newsData);
//		}
//		//执行加载数据的方法
//		newsList();
//	}

	
}});