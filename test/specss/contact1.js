describe("Contact", () => {
  it("Fill all the input fields, submit form and assert success message", async () => {
    //Open URL
    await browser.url("/contact");

    // Fill out the input fields
    await $(".contact-name input").addValue("Test Name");
    await $(".contact-email input").addValue("test@mail.com");
    await $(".contact-phone input").addValue("123456");
    await $(".contact-message textarea").addValue("This is a test message");
    browser.pause(5000);
    await $("button[type=submit").click();

    // Assert the success message

    const successAlert = $("[role='alert']");
    await expect(successAlert).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
