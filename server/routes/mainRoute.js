const express = require ('express');
const router = express.Router();
const {extract} = require('article-parser');


router.get('/', (request, response)=>{
    
    // const url = 'https://goo.gl/MV8Tkh';
 
    const data = request.body;
    console.log(data)

    extract(url).then((article) => {
      console.log(article);
      response.send(article);

    }).catch((err) => {
      console.log(err);
    });

})

module.exports = router;