import { CiderService } from './cider.service';
import { Test } from '@nestjs/testing';
import { CiderModule } from './cider.module';
import { AppleService } from "@apple-lib/apple-module/apple.service";

describe('Cider service', () => {
  let appleService: AppleService;
  let ciderService: CiderService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CiderModule],
    }).compile();
    await module.init();

    appleService = module.get(AppleService);
    ciderService = module.get(CiderService);
  });

  it('appleService should have 8 seeds', () => {
    expect(appleService.seeds).toBe(8);
  });

  it('ciderService should have 800 seeds', () => {
    expect(ciderService.seeds).toBe(800);
  });
});
