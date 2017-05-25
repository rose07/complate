var express=require("express");
var app=express();
app.get('/',function(req,res){
	res.sendfile("index.html");

});
app.use(express.static(__dirname));
app.listen(3000,function(){
	console.log('服务启动，请再浏览器中输入：127.0.0.1:3000');
});
