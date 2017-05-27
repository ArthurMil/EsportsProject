import { EsportsProjectPage } from './app.po';

describe('esports-project App', function() {
  let page: EsportsProjectPage;

  beforeEach(() => {
    page = new EsportsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
