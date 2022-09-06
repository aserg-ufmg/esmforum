Feature: Report Item (Question or Answer)

Scenario: This item is problematic
  Given your content is a problem
  When the User reports
  Then the item will be "reported to a admin"