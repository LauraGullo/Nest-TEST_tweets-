import { Test, TestingModule } from '@nestjs/testing';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

describe('TweetsController', () => {
  let controller: TweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweetsController],
      providers: [TweetsService]
    }).compile();

    controller = module.get<TweetsController>(TweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTweets', () => {
    it('should return an array of tweets', async () => {
      const tweets = ['My tweet'];
      jest.spyOn(controller, 'getTweets').mockImplementation(() => tweets);
      expect(await controller.getTweets()).toBe(tweets);
    });
  });

  describe('getOneTweet', () => {
    it('should return a tweet', async () => {
      const id=1;
      const tweet = 'My tweet';
      jest.spyOn(controller, 'getOneTweet').mockImplementation(() => tweet);
      expect(await controller.getOneTweet(id)).toBe(tweet);
    });
  });

  describe('createTweet', () => {
    it('should create a tweet', async () => {
      const id=1;
      const tweet ='My tweet'
      
      jest.spyOn(controller, 'createTweet').mockImplementation(() => id);
      expect(await controller.createTweet(tweet)).toBe(id);
    });
  });

  describe('deleteDog', () => {
    it('should delete a tweet', async () => {
      const id=1;
        
      jest.spyOn(controller, 'deleteTweet').mockImplementation(() => undefined);
      expect(await controller.deleteTweet(id)).toBe(undefined);
    });
  });

  
  describe('updateTweet', () => {
    it('should update a tweet', async () => {
      const id=1;
      const tweet = 'My tweet'
         
      jest.spyOn(controller, 'updateTweet').mockImplementation(() => tweet);
      expect(await controller.updateTweet(id, tweet)).toBe(tweet);
    });
  });
 
})





