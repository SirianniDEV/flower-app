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
    expect(checkingContainerWidth).toBe("auto");
    })
})

test.use({
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("The mobile viewport for iPadAir", () => {
    test('testing for width of flex boxes on iPadAir', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#container');

        const checkingContainerWidth = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
    })

    console.log(checkingContainerWidth);
    expect(checkingContainerWidth).toBe("auto");
    })
})