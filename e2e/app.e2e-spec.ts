import { CarProjectPage } from './app.po';

describe('car-project App', () => {
  let page: CarProjectPage;

  beforeEach(() => {
    page = new CarProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
