const express = require ('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4f392a4b91624d49b1e930facf602dd7');
const uuid = require('uuid')

router.get('/', (request, response) => {
    newsapi.v2.topHeadlines({
        sources: '',
        q: '',
        category: 'science',
        language: 'en',
        country: 'us',
        pageSize: '10'
      }).then(science => {
        let newsArticle = []

        science.articles.map((item) => {
          item.id = uuid();
          newsArticle.push(item)
        })

        response.send(newsArticle)
    });
});

module.exports = router;