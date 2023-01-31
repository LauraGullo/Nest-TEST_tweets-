import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {

    tweets: string[] = [];

    createTweet(tweet){
      const tweetCreated=this.tweets.push(tweet)
      return tweetCreated;
  }
    
  updateTweet(id: number, tweet) {
      const tweetFound= this.tweets[id];
      const updateTweet=Object.assign(tweetFound,tweet);
      return updateTweet;
  }
  getTweets() {
    return this.tweets;
  }

  deleteTweet(id: number) {
    const tweetToDelete = this.tweets[id];
    const deletedTweet = this.tweets.splice(id, 1);
    return deletedTweet;
  }
  

  getOneTweet(id:number):any{
    const tweet = this.tweets[id];
    return tweet;
}
}
