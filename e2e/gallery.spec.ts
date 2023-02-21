import { test, expect } from '@playwright/test'

let galleryPage = "http://localhost:3000/gallery";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Checking Description', () => {
    test('Count number of list <li> tags', async({ page }) => {
        await page.goto(galleryPage)

        await expect(page.locator('ul > li')).toHaveCount(3);
    })
})