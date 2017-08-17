function openLayer(IdName, tpos, lpos){
  var pop = document.getElementById(IdName);
  pop.style.display = "block";
  pop.style.top = tpos + "px";
  pop.style.left = lpos + "px";
}
 //레이어 팝업 닫기
function closeLayer(IdName){
  var pop = document.getElementById(IdName);
  pop.style.display = "none";
}

$(document).ready( function () {
  // 칼라 픽커생 생성  및 초기값 세팅(한글로 변환)
  $('#cpInline').colorpicker({color:'#31859b',strings: '테마  칼러,표준 칼러,웹 칼러,테마 칼러,팔레트로 돌아가기,History,No history yet.'});   
  
    $('#getVal').on('click', function(){
      alert('Selected color = "' + $('#cpInline').colorpicker("val") + '"');
    });
    $('#setVal').on('click', function(){
      $('#cpInline').colorpicker("val",'#31859b');
    });
    $('#enable').on('click', function(){
      $('#cpInline').colorpicker("enable");
    });
    $('#disable').on('click', function(){
      $('#cpInline').colorpicker("disable");
    });
    $('#destroy').on('click', function(){
      $('#cpInline').colorpicker("destroy");
    });
    $('#make').on('click', function(){
      $('#cpInline').colorpicker({color:'#31859b',strings: '테마  칼러,표준 칼러,웹 칼러,테마 칼러,팔레트로 돌아가기,History,No history yet.'});
    });

});