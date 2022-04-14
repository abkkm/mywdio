describe("Blog", () => {
  it("Get the list of all Recent Posts & assert the length of each list item > 1 & assert the total length", async () => {
    await browser.url("/blog");

    //Get the Recent Post List Elements
    const recentPostsList = await $$("#recent-posts-3 ul li");

    //Loop through the list and assert the text length is greater than 10

    for (const item of recentPostsList) {
      const text = await item.text;
      await expect(text.ToHaveLength).toBeGreaterThan(10);
    }

    //Assert the total length of the list is 4

    await expect(recentPostsList).ToHaveLength(4);
  });
});
