import { WithBalancePipe } from './with-balance.pipe';

describe('WithBalancePipe', () => {
  it('create an instance', () => {
    const pipe = new WithBalancePipe();
    expect(pipe).toBeTruthy();
  });
});
