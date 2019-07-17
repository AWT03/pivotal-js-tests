Feature: Tasks
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |
    And I save the id after sending a POST request to stories with data:
      | name | (prefix)_project_(current_datetime) |

  @functional
  Scenario: Verify that I can create a new task
    When I send a POST request to tasks with data:
      | description | some random description |
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can set properties while creating a new task
    When I send a POST request to tasks with data:
      | description | some random description |
      | complete    | true                    |
      | position    | 1                       |
    Then I expect the status code is 200

  @functional
  Scenario: Verify that I can get the information of various tasks
    When I count the already existing tasks
    And I send several POST requests to tasks with data:
      | description          |
      | do the task number 1 |
      | do the task number 2 |
      | do the task number 3 |
    And I send a GET request to tasks
    Then I expect the status code is 200
    And I expect the response is a list that contains 3 new tasks
