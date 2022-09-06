const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function viewReport(reports)
{
  if (reports > 0) return "Welcome to Reports";
}

Given('the reports were submitted by users', () =>
{
  this.reports = 20;
});

When('the Admin open the report page', () =>
{
  this.openPage = viewReport(this.reports);
});

Then('the report are displayed for he with {string}', (openPageReport) => 
{
  assert.strictEqual(this.openPage, openPageReport);
});