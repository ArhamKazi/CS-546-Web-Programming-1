const express = require('express');
const router =  express.Router();
 router.get('/',(req,res) => {
res.send({
    "storyTitle": "That one time when I almost bought a Mustang",
    "story": "I moved to USA in August 2019. In USA, car market is quite different from what we have in India. For Example a Mustang GT costs around 45k USD in USA. Same car would cost 120k USDin Mumbai, which is alot. So, I wanted to buy a mustang, always. And this is about the time when I almost bought one\nI was just casually looking for some used cars on craigslist and I came across thislisting in Wayne, New Jersey. Guy listed his 2010 Mustang for around 7K USD. And it looke pretty good as well. I had around 6k USD with me from my college loan. And oh boy, I was actually gonna spend that money. I went to look at the car. I asked the seller if he can give it to me for around 6K. He wouldnt listen to me and I just came back home. There is nothing more to it. I am just looking for content. Excuse me please.\nPS: I drive a 2002 Honda Accord now. Courtesy of my uncle, who drives a Merc now"
  })
 });
 module.exports = router;
