describe("Home", () => {
  it("Open URL & assert title", async () => {
    await browser.url("/");
    await expect(browser).toHaveTitle("The Home Depot");
  });
  it("Click Signin link", async () => {
    await browser.url("/auth/view/signin?redirect=/&ref=null");
    await $("#username").setValue("test@mail.com");
    await browser.execute(
      "document.querySelector('button[type=submit').removeAttribute('class')"
    );
    await $("//*[@id='single-signin__body']/div/div[2]/form/button").click();
    await $("#password-input-field").setValue("test@mail.com");
  });
});
