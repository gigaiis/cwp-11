const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('*', (req, res, next) => {
	let file = req.url.split('/')[1];
	let name = 'nophoto.jpg';
	fs.access(`./routes/images/${file}`, fs.constants.R_OK, (err) => {
		if (!err) name = req.url;
		res.sendFile(name, { root: './routes/images/'}, (err) => {
	        if (err) next(err);
	    });
	});   
});

module.exports = router;