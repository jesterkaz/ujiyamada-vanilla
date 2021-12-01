setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp07 = $.cookie('stamp03');
    //訪問数のカウント
    if(stamp07 == null){ //最初の訪問
        stamp07 = 1;
    }
    $.cookie('stamp07', stamp07, {expires: 7});
});