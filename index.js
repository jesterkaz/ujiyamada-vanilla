$(function(){
	
	//Cookieの読み込み
	var stamplist = $.cookie('stamplist');
	if(stamplist == null){
		var stamplist = [0,0,0,0,0,0,0,0,0]
	}
	else if(stamplist == [0,0,0,0,0,0,0,0,0]){
		
	}

	$.cookie('stamplist', stamplist, {expires: 7});
	
	$.removeCookie('stampall');
	var stampall = 0;

	console.log(stamplist);
	
	for(var i=0;i<9;i++){
		stampall += stamplist[i]
		console.log(stamplist[i]);
	}

	$.cookie('stampall', stampall, {expires: 7});


	//スタンプの処理
	if($('#visit-stamp td:eq('+stampall+') span').length){ //指定のtd要素があるか判定
		//過去に訪問したぶんのスタンプを表示
		if($('#visit-stamp td:lt('+stampall+') span')){
			$('#visit-stamp td:lt('+stampall+') span').addClass('visited');
		}
		//今回訪問したぶんのスタンプをアニメーションで表示 ※※個別でアニメーションするように後日修正
		if(stampall === 1){
		setTimeout(function(){
			$('#visit-stamp td:eq('+stampall+') span')
				.css('transition','all 0.5s ease-in')
				.addClass('visited');
		},300)};
	}else{
		//訪問回数がtd要素の数を超えたらすべて表示
		$('#visit-stamp td:lt('+stampall+') span').addClass('visited');
	}
	
	//スタンプ数の表示
	if(stampall == 0){
		$('#visitnum').text('まだスタンプを集めていません。');
	}
	else if(stampall < 9){
		$('#visitnum').text('現在、スタンプを'+ stampall +'個集めています。');
	}
	else if(stampall == 9){
		$('#visitnum').text('おめでとうございます、スタンプを集めきりました！');
	}	
	else{
		$('#visitnum').text('エラー：stampallの中身がおかしくなってます');
	}
	//Cookieのリセットクリック時の処理
	$('#reset').click(function(){
		$.removeCookie('stampall');
		$.removeCookie('stamplist');
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