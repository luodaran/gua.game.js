var clide = function(r1,r2){
  var nMaxLeft = 0
  var nMaxTop = 0
  var nMinRight = 0
  var nMinBottom = 0
  r1.w = r1.image.width
  r1.h= r1.image.height
  r2.w = r2.image.width
  r2.h= r2.image.height
   //计算两矩形可能的相交矩形的边界
   nMaxLeft = r1.x >= r2.x ? r1.x : r2.x
   nMaxTop = r1.y >= r2.y ? r1.y : r2.y
   nMinRight = (r1.x + r1.w) <= (r2.x + r2.w) ? (r1.x + r1.w) : (r2.x + r2.w)
   nMinBottom = (r1.y + r1.h) <= (r2.y + r2.h) ? (r1.y + r1.h) : (r2.y + r2.h)
       // 判断是否相交
    if (nMaxLeft > nMinRight || nMaxTop > nMinBottom) {
        return false;
    }
   else {
        return true;
   }
}
