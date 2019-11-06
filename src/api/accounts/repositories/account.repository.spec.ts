import { Test, TestingModule } from '@nestjs/testing';
import { AccountRepository } from './account.repository';

describe('AccountRepository', () => {
  let provider: AccountRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRepository],
    }).compile();

    provider = module.get<AccountRepository>(AccountRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
