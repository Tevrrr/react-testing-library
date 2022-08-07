/** @format */

const Page = require('./page');

class HelloPage extends Page {
	get toggleBtn() {
		return $('#toggle');
	}
	get longToggleBtn() {
		return $('#longToggle');
	}
	get searchInput() {
		return $('#search');
	}

	get helloTitle() {
		return $('#hello');
	}

	async toggleTitleWithInput(text) {
		await this.searchInput.setValue(text);
		await this.toggleBtn.click();
	}

	async longToggleTitleWithInput(text) {
		try {
			await this.searchInput.setValue(text);
			await this.longToggleBtn.click();
			await this.helloTitle.waitForDisplayed({ timeout: 2000 });
		} catch (error) {}
	}
    async clickOnHelloTitle() {
		await this.helloTitle.click();

	}

	open() {
		return super.open('/Hello');
	}
}

module.exports = new HelloPage();
