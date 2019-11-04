module.exports = {
    'Demo test Hackaday Projects': (browser) => {
        browser.url('http://localhost:3000/projects')
        .waitForElementVisible('body')
        .assert.titleContains('Hackaday Projects')
        // .assert.containsText('.hnname', 'Hacker News')
        .click('#projects .project a')
        .waitForElementVisible('body')
        .assert.visible('#projectDetail')
        .click('#projectDetail #recommendedContainer .project a')
        .waitForElementVisible('body')
        .assert.visible('#projectDetail')
    }
}