import { UserClass } from './user-class.model';

describe('UserClass', () => {
  it('should create an instance', () => {
    expect(new UserClass(1,"sarathraj")).toBeTruthy();
  });
});
