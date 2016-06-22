/**
 * Created by wangshuang on 16/6/21.
 */
var express = require('express')
var url = require('url')
var app = express()
app.listen('3000')
app.get('/image', function(req, res){
    res.sendfile('arch.jpg', {maxAge: 24*60*60*1000, root: './views/'}, function(err){
        if(err){
            console.log("Error")
        }else{
            console.log("Success")
        }
    })
})