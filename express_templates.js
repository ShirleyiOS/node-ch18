/**
 * Created by wangshuang on 16/6/21.
 */
var express = require('express')
    jade = require('jade')
    ejs = require('ejs')
var app = express()
app.set('views', './views')
app.set('view engine', 'jade')
app.engine('jade', jade.__express)
app.engine('html', ejs.renderFile)
app.listen(3000)
app.locals.uname = "Brad"
app.locals.vehicle = "Jeep"
app.locals.terrain = "Mountains"
app.locals.climate = "Desert"
app.locals.location = "Unknown"
app.get('/jade', function(req, res){
    res.render('user_jade')
})
app.get('/ejs', function(req, res){
    app.render('user_ejs.html', function(err, renderedData){
        res.send(renderedData)
    })
})