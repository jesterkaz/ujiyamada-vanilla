setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp04 = $.cookie('stamp03');
    //訪問数のカウント
    if(stamp04 == null){ //最初の訪問
        stamp04 = 1;
    }
    $.cookie('stamp04', stamp04, {expires: 7});
});