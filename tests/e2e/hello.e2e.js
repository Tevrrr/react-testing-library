/** @format */

const HelloPage = require('../pages/hello.page');

describe('My hello world page', () => {
	it('should toggle', async () => {
		await HelloPage.open('/Hello');

		await HelloPage.toggleTitleWithInput('hello');
		await expect(HelloPage.helloTitle).toBeExisting();
		await HelloPage.toggleTitleWithInput();
		await expect(HelloPage.helloTitle).not.toBeExisting();
	});

	it('should not toggle', async () => {
		await HelloPage.open('/Hello');

		await HelloPage.toggleTitleWithInput('not hello');
		await expect(HelloPage.helloTitle).not.toBeExisting();
	});

	it('should long toggle', async () => {
		await HelloPage.open('/Hello');

		await HelloPage.longToggleTitleWithInput('hello');
		await expect(HelloPage.helloTitle).toBeExisting();
		await HelloPage.longToggleTitleWithInput('hello');
		await expect(HelloPage.helloTitle).not.toBeExisting();
	});
	it('should click hello world', async () => {
		await HelloPage.open('/Hello');

		await HelloPage.toggleTitleWithInput('hello');
		await HelloPage.clickOnHelloTitle();
		await expect(HelloPage.helloTitle).not.toBeExisting();
	});
});
