$(function(){
	
	//Cookieの読み込み
	var stamp01 = $.cookie('stamp01');
	var stamp02 = $.cookie('stamp02');
	var stamp03 = $.cookie('stamp03');
	var stamp04 = $.cookie('stamp04');
	var stamp05 = $.cookie('stamp05');
	var stamp06 = $.cookie('stamp06');
	var stamp07 = $.cookie('stamp07');
	var stamp08 = $.cookie('stamp08');
	var stamp09 = $.cookie('stamp09');
	
	stampall = stamp01 + stamp02 + stamp03 + stamp04 + stamp05 + stamp06 + stamp07 + stamp08 + stamp09;

	//スタンプの処理
	if($('#visit-stamp td:eq('+stamlall+') span').length){ //指定のtd要素があるか判定
		//過去に訪問したぶんのスタンプを表示
		if($('#visit-stamp td:lt('+stampall+') span').length){
			$('#visit-stamp td:lt('+stampall+') span').addClass('visited');
		}
		//今回訪問したぶんのスタンプをアニメーションで表示 ※※個別でアニメーションするように後日修正
		 setTimeout(function(){
			$('#visit-stamp td:eq('+stampall+') span')
				.css('transition','all 0.5s ease-in')
				.addClass('visited');
		 },300);
	}else{
		//訪問回数がtd要素の数を超えたらすべて表示
		$('#visit-stamp td:lt('+stampall+') span').addClass('visited');
	}
	
	//スタンプ数の表示
	if(stampall === "0"){
		$('#visitnum').text('まだスタンプを集めていません。');
	}
	else if(stampall < 9){
		$('#visitnum').text('現在、スタンプを'+ stampall +'個集めています。');
	}
	else{
		$('#visitnum').text('おめでとうございます、スタンプを集めきりました！');
	}	
	//Cookieのリセットクリック時の処理
	$('#reset').click(function(){
		$.removeCookie('stampall');
		$.removeCookie('stamp01');
		$.removeCookie('stamp02');
		$.removeCookie('stamp03');
		$.removeCookie('stamp04');
		$.removeCookie('stamp05');
		$.removeCookie('stamp06');
		$.removeCookie('stamp07');
		$.removeCookie('stamp08');
		$.removeCookie('stamp09');
		alert("Cookieをリセットしました。")
	});
	
});