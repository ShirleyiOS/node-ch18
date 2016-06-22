/**
 * Created by wangshuang on 16/6/21.
 */
var express = require('express')
var url = require('url')
var app = express()
app.listen(3000)
app.get('/json', function(req, res){
    app.set('json spaces', 4);
    res.json({name:'Simth', built:'1846', items:'137M', centers:['art', 'space', 'zoo']})
})
app.get('/error', function(req, res){
    res.json(500, {status: false, message:"Internal Server Error"})
})
app.get('/jsonp', function(req, res){
    app.set('jsonp callback name', 'cb')
    res.jsonp({name:'Simth', built:'1846', items:'137M', centers:['art', 'space', 'zoo']})
})