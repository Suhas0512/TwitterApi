const mongoose = require('mongoose')
const Twitter = require('twitter')
const Schema = mongoose.Schema

const tweetsSchema = new Schema({
    name :{
        type:String,
        reqired:true
    },
    // NAME:{ 
    //     type:String,
    //     required:true
    // },
    tweets:[
        String
    ]
})

tweetsSchema.pre('save', function(next){
    const tweet = this
    if(tweet.isNew){
        const client = new Twitter({
            consumer_key: '',
            consumer_secret: '',
            access_token_key: '',
            access_token_secret: ''
          });
           
          const params = {screen_name: tweet.name};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              const tweet1  = tweets.map(tweet=>tweet.text)
               tweet.tweets= tweet1
               next()
            }
          })
    }  
    else{
        next()
    }
})

const Tweet = mongoose.model('Tweet', tweetsSchema)
module.exports= Tweet