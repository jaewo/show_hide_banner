window.addEventListener("load", function(){
	var handle=document.querySelector(".handle");
	var picture=document.querySelector(".picture ul");
	var requestURL="../data/img_path.json";
	var request=new XMLHttpRequest();
	var appendHtml="";

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key in data){
					// console.log(key+" : "+data[key]);
					// <li><img src="images/work1.jpg" alt=""></li>
					appendHtml+='<li><img src="images/'+data[key]+'" alt=""></li>'+'\n';
				}
				// console.log("appendHtml : "+appendHtml);
				picture.innerHTML=appendHtml;

				handle.addEventListener("click", function(e){
					e.preventDefault();
					picture.classList.toggle("on");
				});
			});
		}, 10);
	}
	init();
});