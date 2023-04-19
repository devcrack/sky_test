import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

// Value passed to Controller decorator is the initial path for the URLs of this
// module
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('users')
  get_users() {
    return this.testService.getSomething();
  }
}
