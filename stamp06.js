setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamplist = $.cookie('stamplist');
    //訪問数のカウント
    if(stamplist[5] == 0){ //最初の訪問
        stamplist[5] = 1;
    }
    $.cookie('stamplist', stamplist, {expires: 7});
});