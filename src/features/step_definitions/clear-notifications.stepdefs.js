const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function clearNotification(callClear)
{
  if (callClear) return "Emptied";
}

Given('the full notification box', () =>
{
  this.callClear = true;
});

When('the User clear them', () =>
{
  this.cleaned = clearNotification(this.callClear);
});

Then('the notifications will be {string}', (emptied) => 
{
  assert.strictEqual(this.cleaned, emptied);
});