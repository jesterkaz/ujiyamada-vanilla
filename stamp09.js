setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp09 = $.cookie('stamp03');
    //訪問数のカウント
    if(stamp09 == null){ //最初の訪問
        stamp09 = 1;
    }
    $.cookie('stamp09', stamp09, {expires: 7});
});