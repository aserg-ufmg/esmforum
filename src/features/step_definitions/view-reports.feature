Feature: View Reports

Scenario: Reports sended to the admin
  Given the reports were submitted by users
  When the Admin open the report page
  Then the report are displayed for he with "Welcome to Reports"