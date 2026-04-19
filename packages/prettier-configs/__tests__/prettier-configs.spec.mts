import { describe, it, expect } from 'vitest';

describe('#prettier-config', () => {
  it('should be able to returns an object/options', () => {
    expect(require('../')).toBeTypeOf('object');
  });
});
