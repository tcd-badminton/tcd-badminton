'use strict';

import HomeSection from '../home-section';

describe('HomeSection View', function() {

  beforeEach(() => {
    this.homeSection = new HomeSection();
  });

  it('Should run a few assertions', () => {
    expect(this.homeSection).toBeDefined();
  });

});
