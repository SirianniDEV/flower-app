import { test, devices, expect} from '@playwright/test';

test.use({
    ...devices['iPhone XR'],
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('testing for width of flex boxes on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#container');

        const checkingContainerWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
    })

    console.log(checkingContainerWidth);
    expect(checkingContainerWidth).toBe("75%");
    })
})

test.use({
    ...devices['iPad Air'],
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('testing for width of flex boxes on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#container');

        const checkingContainerWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
    })

    console.log(checkingContainerWidth);
    expect(checkingContainerWidth).toBe("75%");
    })
})