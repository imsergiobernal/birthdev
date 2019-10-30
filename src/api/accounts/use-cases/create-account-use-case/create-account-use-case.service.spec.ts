import { Test, TestingModule } from '@nestjs/testing';
import { CreateAccountUseCaseService } from './create-account-use-case.service';

describe('CreateAccountUseCaseService', () => {
  let service: CreateAccountUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateAccountUseCaseService],
    }).compile();

    service = module.get<CreateAccountUseCaseService>(CreateAccountUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
