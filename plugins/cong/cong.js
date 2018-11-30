w = window;
n = navigator;
d = document;
de = document.documentElement;

//处理类
function filename(filename, ex){
	ex	= ex	== undefined ? 0:ex;
	var t = filename.split('.');
	return t[ex];
}
//滚动
function scroll2(where,time){

	where	= where==undefined ? 0:where;
	time	= time ==undefined ? 500:time;
	$('html, body').animate({scrollTop:where},time);
}
function scroll2id(who,weiyi,time){
	
	weiyi	= weiyi	== undefined ? 0:weiyi;
	time	= time	== undefined ? 500:time;
	$("html, body").animate({scrollTop: $('#' + who).offset().top - weiyi}, time);
}

//eval最怕的值替换
function eval_replace(val){

	if(typeof(val) == 'string'){

		val = val.replace(/\r\n/g, '<br>')
		.replace(/\n/g, '<br>')
		.replace(/\r/g, '<br>')
		.replace(/\\/g, '\\\\')
		.replace(/\'/g, '\\\'');
	}

	return val;
}

//全选
function checkall(form, prefix) {
	for(var i = 0; i < form.elements.length; i++) {
		var e = form.elements[i];
		if(e.name != 'chkall' && (!prefix || (prefix && e.name.match(prefix)))) {
		e.checked = form.chkall.checked;
		}
	}
}

//显示隐藏调试信息
$(document).keydown(function(e){

	// alert(e.keyCode);
	if ( e.ctrlKey && e.altKey && e.keyCode == 191 ){
		$('.hide').addClass('hide2');
		$('.hide').removeClass('hide');
	}
	if ( e.ctrlKey && e.altKey && e.keyCode == 222 ){
		$('.hide2').addClass('hide');
		$('.hide2').removeClass('hide2');
	}
});

//预览本地图片 IE10+
function preview_local_image(obj){
	
	var src;
	if (window.createObjectURL!=undefined){ // basic
		src = window.createObjectURL(obj.files[0]);
	} else if (window.URL!=undefined){ // mozilla(firefox)
		src = window.URL.createObjectURL(obj.files[0]) ;
	} else if (window.webkitURL!=undefined){ // webkit or chrome
		src = window.webkitURL.createObjectURL(obj.files[0]) ;
	}
	
	$('#preview_local_image_' + obj.id).attr('src', src);
}