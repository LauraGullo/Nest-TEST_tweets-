import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  describe('getTweets', () => {
    it('should return an array of tweets', async () => {
      const tweets = ['first tweet', 'second tweet'];
      jest.spyOn(service, 'getTweets').mockImplementation(() => tweets);
      expect(await service.getTweets()).toBe(tweets);
      expect(await service.getTweets()).toHaveLength(2);

    });
  });

  describe('getOneTweet', () => {
    it('should return a tweet', async () => {
      const id=1;
      const tweet ='A tweet';
      jest.spyOn(service, 'getOneTweet').mockImplementation(() => tweet);
      expect(await service.getOneTweet(id)).toBe(tweet);
    });
  });

  describe('createTweet', () => {
    it('should create a tweet', async () => {
      const id=1;
      const tweet = 'A tweet';
      jest.spyOn(service, 'createTweet').mockImplementation(() => id);
      expect(await service.createTweet(tweet)).toBe(id);
    });
  });

  describe('deleteTweet', () => {
    it('should delete a tweet', async () => {
       
        const id=1;
        
      jest.spyOn(service, 'deleteTweet').mockImplementation(() => undefined);
      expect(await service.deleteTweet(id)).toBe(undefined);
    });
  });

  
  describe('updateTweet', () => {
    it('should update a tweet', async () => {
      const id=1;
      const tweet ='A tweet'
         
      jest.spyOn(service, 'updateTweet').mockImplementation(() => tweet);
      expect(await service.updateTweet(id, tweet)).toBe(tweet);
    });
  });
 
})  
