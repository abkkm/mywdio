describe("Navigation Menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/");

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    const navLinks = await $("#primary-menu").$$("li[id*=menu]");

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });
  it("Get the text of all menu items & assert them using wait commands", async () => {
    //Open URL
    await browser.url("https://practice.automationbro.com/");

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    //wait until the Home text is displayed on the navigation menu

    await browser.waitUntil(
      async function () {
        const homeText = await $("#primary-menu li").getText();
        return homeText === "Shop";
      },
      {
        timeout: 5000,
        timeoutMsg: "Could not verify the Home text from #primary menu li",
      }
    );

    const navLinks = await $("#primary-menu").$$("li[id*=menu]");

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });
});
