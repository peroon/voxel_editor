// 全置換：全ての文字列 org を dest に置き換える  
String.prototype.replaceAll = function (org, dest){  
  return this.split(org).join(dest);  
}  