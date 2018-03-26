'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('beerRecipe');

	
var id_counter=0;
var	find_id_counter=Task.findOne({}).sort('-BeerID').exec(function (err, task) {  //尋找id最末端	
		id_counter=task.BeerID+1;
		});	
	
exports.list_all_recipes = function(req, res) {
	var query = Task.find({});
	if(req.query.BeerID)   										//以配方id尋找 提供比較的查詢
	{
		query.where('BeerID');
		if(!req.query.BeerID.$gte && !req.query.BeerID.$lte)
			query.equals(req.query.BeerID);
		else 
		{	
			if(req.query.BeerID.$gte)
				query.gte(req.query.BeerID.$gte);
			if(req.query.BeerID.$lte)
				query.lte(req.query.BeerID.$lte);
		}
	}
	if(req.query.Name) 
		query.where({Name: new RegExp(req.query.Name, "i") });	//以配方名稱Name尋找 實作LIKE功能
	if(req.query.Style) 
		query.where({Style: new RegExp(req.query.Style, "i") });//以配方風格Style尋找 實作LIKE功能
	if(req.query.StyleID) 
		query.where('StyleID').equals(parseInt(req.query.StyleID)); //以配方風格id StyleID尋找
	if(req.query.Color)   											//以顏色尋找 提供比較的查詢
	{
		query.where('Color');
		if(!req.query.Color.$gte && !req.query.Color.$lte) 
			query.equals(req.query.Color);
		else 
		{	
			if(req.query.Color.$gte)
				query.gte(req.query.Color.$gte);
			if(req.query.Color.$lte)
				query.lte(req.query.Color.$lte);
		}
	}
	query.select(req.query.field)             //select()    決定要顯示的欄位
		 .skip(parseInt(req.query.skip))	  //skip=offset 跳過前n筆資料
		 .limit(parseInt(req.query.limit))    //limit()     限制輸出資料數
		 .sort(req.query.orderBy);            //sort()      以orderBy屬性排序 +.-決定順排逆排
	query.exec(function (err, task) {         //執行query
		if (err)
			res.send(err);
		res.json(task);
		});
};

exports.read_a_recipe = function(req, res) {   //讀beer_id的資料
    Task.findOne({BeerID: req.params.beer_id}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_recipe = function(req, res) { //建立新配方
	req.body.BeerID=id_counter;//自動assign BeerID
	id_counter++;
	var new_task = new Task(req.body);
	new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_recipe = function(req, res) { //更新beer_id的資料
    req.body.BeerID=req.params.beer_id; //固定BeerID
	Task.findOneAndUpdate({BeerID: req.params.beer_id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_recipe = function(req, res) { //刪除beer_id的資料
    Task.remove({BeerID: req.params.beer_id}, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message:'Task successfully deleted'});
  });
};