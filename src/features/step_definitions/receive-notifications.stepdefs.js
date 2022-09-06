const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function receiveNotification(answered)
{
  if (answered) return "a new answer";
}

Given('the a question of mine has been answered', () =>
{
  this.answered = true;
});

When('the answer is created', () =>
{
  this.hasNotification = receiveNotification(this.answered);
});

Then('the notification is alerted as {string}', (notified) => 
{
  assert.strictEqual(this.hasNotification, notified);
});