const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function hitLike(like)
{
  if (like) return 1;
}

Given('the question is very good', () =>
{
  this.isGood = true;
});

When('the User hit Like', () =>
{
  this.likes = hitLike(this.isGood);
});

Then('the like count is added {string} time', (likeCount) => 
{
  assert.strictEqual(this.likes, Number(likeCount));
});