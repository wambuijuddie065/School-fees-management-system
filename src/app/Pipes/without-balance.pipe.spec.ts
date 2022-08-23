import { WithoutBalancePipe } from './without-balance.pipe';

describe('WithoutBalancePipe', () => {
  it('create an instance', () => {
    const pipe = new WithoutBalancePipe();
    expect(pipe).toBeTruthy();
  });
});
