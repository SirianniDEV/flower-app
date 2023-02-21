const { devices } = require('@playwright/test')

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
    //option shared for all projects
    timeout: 3000,
    use: {
        ignoreHTTPSErrors: true,
    },

    //Option specific to each project browser size
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName:'chromium',
                viewport: { width: 1280, height: 720},
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                 browserName: 'chromium',
                 ...devices['iPhoneXR'],
                 viewport: {width: 414, height: 896},
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                 browserName: 'chromium',
                 ...devices['iPad Air'],
                 viewport: {width: 820, height: 1180},
            },
        },
    ]
}

module.exports = config;