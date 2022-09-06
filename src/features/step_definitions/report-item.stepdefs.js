const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function reportItem(reportCounter)
{
  if (reportCounter > 0) return "reported to a admin";
}

Given('your content is a problem', () =>
{
  this.reportCounter = 1;
});

When('the User reports', () =>
{
  this.wasReported = reportItem(this.reportCounter);
});

Then('the item will be {string}', (reported) => 
{
  assert.strictEqual(this.wasReported, reported);
});