//DAO数据操作
var MongoClient=require('mondodb').MongoClient;
function _connectDB(callback){
	var url='mongodb://localhost:27017/myMongDB';
	MongoClient.connect(url,function(err,db){
		callback(err,db);
		console.log("连接成啦");
	});
} 

//插入数据
expprts.insertOne=function(collectionName,json,callback){
	_connectDB(function(err,db){
		db.collection(collectionName).insertOne(json,function(err,result){
			callback(err,result);
			db.colose();
		})
	})
}