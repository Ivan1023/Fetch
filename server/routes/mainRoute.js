const express = require ('express');
const router = express.Router();
const {extract} = require('article-parser');


router.post('/', (request, response)=>{
    
    console.log('======You have reached the server======')
    
    const data = request.body.url;

    //https://www.npmjs.com/package/article-parser
    // article parser to strip content from url page and send back in an array of objects
    extract(data).then((article) => {
      console.log(article);
      response.send(article);

    }).catch((err) => {
      console.log(err);
    });

})

module.exports = router;