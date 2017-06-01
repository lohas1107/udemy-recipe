import { UdemyRecipePage } from './app.po';

describe('udemy-recipe App', () => {
  let page: UdemyRecipePage;

  beforeEach(() => {
    page = new UdemyRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
