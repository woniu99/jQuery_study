// 1.选择更多元素
$(function() {

    var labelElems = document.getElementsByTagName("label");
    var jq = $("img[src*=daffodil]");

    $("img:even").add("img[src*=primula]").add(jq)
        .add(labelElems).css("border","thick double red");
});