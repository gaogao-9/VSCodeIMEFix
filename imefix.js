(function(W,$){
	(function LOOP(){
		var inputTextarea = $("textarea.inputarea");
		if(inputTextarea === null){
			requestAnimationFrame(LOOP);
			return;
		}
		
		var lastdt = Date.now();
		var isContinue = false;
		var value = "";
		
		inputTextarea.addEventListener("compositionstart", function(eve){
			if((Date.now()-lastdt)>10){
				value = "";
			}
			else{
				isContinue = true;
			}
		},false);
		inputTextarea.addEventListener("compositionupdate", function(eve){
			if(isContinue){
				eve.target.value = value;
			}
		},false);
		inputTextarea.addEventListener("compositionend", function(eve){
			value = eve.target.value;
			lastdt = Date.now();
		},false);
	})();
})(window,window.document.querySelector.bind(window.document));