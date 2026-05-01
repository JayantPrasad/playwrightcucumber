class homePO {
    constructor(page, expect) {
        this.page = page
        this.expect = expect
        this.homeTag = this.page.locator('#nav-home')
        this.eventsTag = this.page.locator('#nav-events')
        this.bookingsTag = this.page.locator('#nav-bookings')
        this.apiTag = this.page.getByText('API Docs')
        this.browseEventsLabel = this.page.getByText('Browse Events →')
        this.bookingLabel = this.page.getByRole('button', { name: 'My Bookings' })
        this.bookNowBtns = this.page.getByText('Book Now')
    }

    async verifyTags() {
        this.expect(this.homeTag).toBeVisible()
        this.expect(this.eventsTag).toBeVisible()
        this.expect(this.bookingsTag).toBeVisible()
        this.apiTag
    }
    async verifyLabels() {
        this.browseEventsLabel
        this.bookingLabel
    }

}
module.exports = { homePO }
