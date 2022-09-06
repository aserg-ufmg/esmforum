Feature: Clear Notification

Scenario: I received a lot of notifications and i need to clear them
  Given the full notification box
  When the User clear them
  Then the notifications will be "Emptied"