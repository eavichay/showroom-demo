const showroom = require('showroom/puppeteer')();
const assert = require('assert');
describe('<pop-up>', () => {
  before (async () => {
    await showroom.start();
  });

  after (async () => {
    await showroom.stop();
  });

  beforeEach( async () => {
    await showroom.test('pop-up');
  });

  it('Should not show content', async () => {
    const content = await showroom.find('#content');
    const isVisible = await showroom.isVisible(content);
    assert.equal(false, isVisible);
  });

  it('Should show content on trigger click', async () => {
    const trigger = await showroom.find('// [part="trigger"]');
    const content = await showroom.find('#content');
    await trigger.click();
    const isVisible = await showroom.isVisible(content);
    assert.equal(true, isVisible);
  });
});