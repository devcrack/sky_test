import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

// Value passed to Controller decorator is the initial path for the URLs of this
// module

/**
 * The TestController handles HTTP requests related to test data.
 */
@Controller('test')
export class TestController {
  /**
   * Creates a new TestController instance.
   * @param testService The TestService instance to be injected.
   */
  constructor(private testService: TestService) {}

  /**
   * Handles GET requests to the /test/users URL and returns test user data.
   * @returns The test user data.
   */
  @Get('users')
  get_users() {
    return this.testService.getUsers();
  }
}
