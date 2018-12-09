import { browser, element, by } from 'protractor';

describe('Testing the hero list page', () => {

  it('should contain the word heroes', () => {
    browser.get('/');
    element(by.css('body')).getText().then(function(text) {
      expect(text).toContain("Heroes")
    });
  });

});
