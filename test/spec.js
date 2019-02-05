const homePage = `https://onefootball.com/en/home`;
const championsLeaguePage = `https://onefootball.com/en/competition/champions-league-5`;
const tableChampionsLeaguePage = `https://onefootball.com/en/competition/champions-league-5/table`;

describe('home page', () => {

    beforeEach(() => {
        browser.get(homePage);
    });

    it(`should check home page title`, () => {
        expect(browser.getTitle()).toContain(`Onefootball`, `Incorrect title`);
    });

    it('should check popular pages', () => {
        const popularPage = element(by.className('col-24 text-gray-dark'));
        expect(popularPage.getText()).toEqual('Popular Pages', 'Show popular pages failed');
    });
});

describe('champions league page', () => {

    beforeEach(() => {
        browser.get(championsLeaguePage);
    });

    it('should check current title', () => {
        expect(browser.getTitle()).toContain('Champions League - Onefootball', 'Incorrect title');
    });
});

describe('Table champions league page', () => {

    beforeEach(() => {
        browser.get(tableChampionsLeaguePage);
    });

    it('should check the current table', () => {
        const result = element(by.className('h2 p-0 mb-lg'));
        expect(result.getText()).toEqual('Table', 'Incorrect table');
    });

    it('should check counts of tables', () => {
        const count = element.all(by.css('li[class*="d-block pt"]'));
        expect(count.count()).toBe(8, 'Incorrect counts of tables');
    });
});