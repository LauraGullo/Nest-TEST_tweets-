import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {

    constructor(private tweetsService : TweetsService){}

  @Get(':id')
  getOneTweet(@Param ('id')id:number){
    return this.tweetsService.getOneTweet(id);
  }
 
  @Get()
  getTweets() {
    return this.tweetsService.getTweets();
  }

  @Post()
  createTweet(@Body() dog){
    return this.tweetsService.createTweet(dog);
  }
  
  @Delete(':id')
    deleteTweet(@Param('id', ParseIntPipe) id: number) {
        return this.tweetsService.deleteTweet(id);
    }

  @Put(':id')
    updateTweet(@Param('id', ParseIntPipe) id: number, @Body() tweet: string): string {
        return this.tweetsService.updateTweet(id, tweet);
    } 
}
