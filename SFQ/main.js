var express=require("express");
var app=express();
app.get("/",function (req,res) {
  res.sendfile("index.html");
});
app.use(express.static(__dirname));
app.listen(3003,function(){
   console.log("服务启动，请在浏览器输入：127.0.0.1:3003。。。");
});