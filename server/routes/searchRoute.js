const express = require ('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4f392a4b91624d49b1e930facf602dd7');
const uuid = require('uuid')

router.post('/', (request, response) => {
  // console.log(request.body.search)
    newsapi.v2.everything({
        q: request.body.search,
        sources: '',
        domains: '',
        from: '',
        to: '',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: '10'
      }).then(searchTopic => {
        let newsArticle = []

        searchTopic.articles.map((item) => {
          item.id = uuid();
          newsArticle.push(item)
        })
        console.log(newsArticle)
        response.send(newsArticle)
      });
});

module.exports = router;