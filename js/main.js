// 按下回到頂端按鈕回到頂端
// jqready
$(document).ready(function () {
    // jqclick
    $("#back-to-top").click(function (e) { 
        // 找到html,body 執行動畫({動畫屬性:值},時間);
        $("html,body").animate({scrollTop:0},1000);
    });
});