setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp05 = $.cookie('stamp03');
    //訪問数のカウント
    if(stamp05 == null){ //最初の訪問
        stamp05 = 1;
    }
    $.cookie('stamp05', stamp05, {expires: 7});
});