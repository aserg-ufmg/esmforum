Feature: Like Question

Scenario: I liked this question
  Given the question is very good
  When the User hit Like
  Then the like count is added "1" time