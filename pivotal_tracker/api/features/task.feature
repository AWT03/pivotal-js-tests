Feature: Task
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |
    And I save the id after sending a POST request to stories with data:
      | name | (prefix)_story_(current_datetime) |
    And I save the id after sending a POST request to tasks with data:
      | description | (prefix)_some_helpful_task |

  @functional
  Scenario: Verify that I can get a specific task's information
    When I send a GET request to task
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can delete a specific task
    When I send a DELETE request to task
    Then I expect the status code is 204
    And I send a GET request to task
    And I expect the status code is 404

  @functional
  Scenario: Verify that I can change the name of a task
    When I send a PUT request to task with data:
      | description | (prefix)_some_helpful_task_renamed |
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can change the properties of an already created task
    When I send a PUT request to task with data:
      | description | some random description |
      | complete    | true                    |
      | position    | 1                       |
    Then I expect the status code is 200
