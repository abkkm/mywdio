describe("Getting Started", () => {
  it.skip("should open a web page", () => {
    // browser.url('https://the-internet.herokuapp.com/');

    // Correct Base URL set in the config
    // baseURL + relative URL
    // https://the-internet.herokuapp.com + 'abtest'
    // https://the-internet.herokuapp.com/abtest
    // browser.url('abtest');

    // 'https://the-internet.herokuapp.com/jqueryui/menu'
    browser.url("/jqueryui");

    console.log(browser.getUrl());

    browser.pause(5000);
  });
});
