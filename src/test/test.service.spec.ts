import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';
import { HttpModule } from '@nestjs/axios';

describe('TestService', () => {
  let service: TestService;

  beforeEach(async () => {
    // The TestService has a dependency on the HttpService.
    // This dependency is provided through the HttpModule import.
    // The TestService is defined as a provider in the module.
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService],
      imports: [HttpModule],
    }).compile();

    // Retrieving an instance of the TestService class from the testing module.
    service = module.get<TestService>(TestService);
  });

  //  Tests whether the TestService is defined or not.
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
