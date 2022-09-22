import { AppleModule } from './apple.module';
import { AppleService } from './apple.service';
import { Test } from '@nestjs/testing';

describe('Apple service', () => {
  let svc: AppleService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppleModule],
    }).compile();
    await module.init();

    svc = module.get(AppleService);
  });

  it('should have 8 seeds', () => {
    expect(svc.seeds).toBe(8);
  });
});
