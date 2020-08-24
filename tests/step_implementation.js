/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, near, screenshot, text, focus, textBox, toRightOf, link } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

step("Goto home page", async () => {
    await goto('http://127.0.0.1:4000');
});

step("Search for <query>", async (query) => {
    await focus(textBox({class: 'search__input'}));
    await write(query);
});

step("Search results contain <content>", async (content) => {
    assert.ok(await link(content, {class: "search-result"}).exists());
});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});