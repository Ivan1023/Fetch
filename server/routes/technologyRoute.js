const express = require ('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4f392a4b91624d49b1e930facf602dd7');

router.get('/', (request, response) => {
    newsapi.v2.topHeadlines({
        sources: '',
        q: '',
        category: 'technology',
        language: 'en',
        country: 'us',
        pageSize: '10'
      }).then(technology => {
        console.log(technology);
        response.send(technology)
    });
});

module.exports = router;