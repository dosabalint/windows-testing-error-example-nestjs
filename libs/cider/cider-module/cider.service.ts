import { Injectable } from '@nestjs/common';
import { AppleService } from "@apple-lib/apple-module/apple.service";

@Injectable()
export class CiderService {
  constructor(private appleService: AppleService) {}

  get seeds(): number {
    return this.appleService.seeds * 100;
  }
}
