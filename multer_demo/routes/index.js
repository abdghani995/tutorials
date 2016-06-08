var express = require('express');
var router = express.Router();
var multer    =   require( 'multer' );
var upload    =   multer( { dest: 'uploads/' } );
var dir_link = '/home/silveruser/Desktop/tutorials/multer_demo/uploads/'
var fs= require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'), function(req, res, next){
	
	res.redirect('/files')

})



var path = process.argv[2];

router.get('/files',function(req,res,next){
	var items_arr=[] 
	fs.readdir(dir_link, function(err, items) {
	    for (var i=0; i<items.length; i++) {
	        items_arr.push(items[i]);
	        console.log(items[i])
	    }
	});
	res.send(items_arr	)
	res.send("hello")
})

module.exports = router;
