// 按下回到頂端按鈕回到頂端
// jqready
$(document).ready(function () {
    // jqclick 
    // -- 回到頂端
    $("#back-to-top").click(function (e) { 
        // 找到html,body 執行動畫({動畫屬性:值},時間);
        $("html,body").animate({scrollTop:0},1000);
    });
    // -- 捲動顯示或隱藏按鈕
    // window - 視窗
    // scroll - 滾動
    $(window).scroll(function () { 
        // 輸出訊息至平台
        // console.log("捲動中...");
        // scrollTop() 元素的上方位置
        // console.log($(window).scrollTop());

        // 如果 螢幕高度>= 200 就顯示按鈕
        // 否則就隱藏按鈕
        if ($(window).scrollTop() >= 200 ) {

            $("#back-to-top").fadeIn(500);        
        } else {
            
            $("#back-to-top").fadeOut(500);
        }
    });

    // -- 連結捲動到標題
$(".nav-link").click(function (e) {
    
    // 取得點選連結的屬性 href 內容
    var link = $(this).attr("href");
    console.log(link);

    // 取得目標標題的上方 (位移,上方)
    var top = $(link).offset().top;
    console.log(top);

    var speed = $(this).attr("data-speed");
    console.log(speed)

    // 動畫
    // 將 字串 轉為 整數 parseInt(字串)
    $("html,body").animate({scrollTop: top}, parseInt(speed));
    });
});