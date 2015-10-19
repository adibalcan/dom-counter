function domCounter(selector){
	var a = document.querySelectorAll(selector); 
	var sum = 0;
	for(var i=0; i<a.length;i++){
		var temp = parseInt(a[i].innerHTML);
		if(!isNaN(temp)){
			sum += temp;
		}
	}
	return sum;
}
