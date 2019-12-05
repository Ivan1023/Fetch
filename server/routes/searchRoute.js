const express = require ('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4f392a4b91624d49b1e930facf602dd7');

router.get('/', (request, response) => {
  console.log(request)
    newsapi.v2.everything({
        q: response,
        sources: '',
        domains: '',
        from: '',
        to: '',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: '10'
      }).then(response => {
        console.log(response);
        response.send(response)
      });
});

module.exports = router;