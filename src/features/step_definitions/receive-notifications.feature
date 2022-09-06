Feature: Receive Notification

Scenario: I received a notification
  Given the a question of mine has been answered
  When the answer is created
  Then the notification is alerted as "a new answer"