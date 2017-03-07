/**
 * 使用上下文限制搜索范围
 * $(selector,context)
 * 将$(".drow")作为另一个选择器的上下文，作为查找起点
 */
// $(function() {
//     $("img:odd",$(".drow")).mouseenter(function(e) {
//         $(this).css("opacity",0.5);
//     }).mouseout(function(e) {
//         $(this).css("opacity",1.0);
//     });
// });

// 确定创建jQuery对象时使用的上下文对象
$(function() {
    var jq1 = $("img:odd");
    console.log("No context:" + jq1.context.tagName);

    var jq2 = $("img:odd",$(".drow"));
    console.log("Multiple context elements:" + jq2.context.tagName);

    var jq3 = $("img:odd",document.getElementById("oblock"));
    console.log("Single context element:" + jq3.context.tagName);
});