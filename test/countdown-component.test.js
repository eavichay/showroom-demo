const assert = require('assert');
const showroom = require('showroom/puppeteer')();

describe('countdown-component', async () => {

  before(async () => {
    await showroom.start();
    // starts showroom server
  });

  after(async () => {
    await showroom.stop();
    // stops the showroom server
  });

  beforeEach( async () => {
    await showroom.utils.setTestSubject('countdown-component');
    await showroom.utils.page.waitFor(150);
    // select the component with defaults from the descriptor file
  });

  it('Should display initial time', async () => {
    const innerText = await showroom.utils.getProperty('innerText');
    assert.equal(innerText, '1:50');
  });

  it('Should count to zero and trigger events', async () => {
    await showroom.utils.trigger('start');
    await showroom.utils.page.waitFor(1500);
    const innerText = await showroom.utils.getProperty('innerText');
    const [startEvent, ...restOfEvents] = await showroom.utils.getEventList();
    const timeoutEvent = restOfEvents.pop();

    // assertions
    assert.equal(innerText, '0:00');
    assert.equal(startEvent.type, 'onstart');
    for (const tickEvent of restOfEvents) {
      assert.equal(tickEvent.type, 'ontick');
    }
    assert.equal(timeoutEvent.type, 'ontimeout');
  });

});