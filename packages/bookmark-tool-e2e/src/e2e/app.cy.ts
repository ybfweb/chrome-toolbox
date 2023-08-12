import { getGreeting } from '../support/app.po';

describe('bookmark-tool', () => {
  beforeEach(() => cy.visit('/'));

  it('显示欢迎消息', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome bookmark-tool');
  });
});
