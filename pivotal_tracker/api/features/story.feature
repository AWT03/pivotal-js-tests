Feature: Story
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |
    And I save the id after sending a POST request to stories with data:
      | name | (prefix)_story_(current_datetime) |

  @functional
  Scenario: Verify that I can get a specific story's information
    When I send a GET request to story
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can delete a specific story
    When I send a DELETE request to story
    Then I expect the status code is 204
    And I send a GET request to story
    And I expect the status code is 404

  @functional
  Scenario: Verify that I can change the name of a story
    When I send a PUT request to story with data:
      | name | (prefix)_new_name_(current_datetime) |
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can change the properties of an already created story
    When I send a PUT request to story with data:
      | name                   | (prefix)_project_(current_datetime) |
      | description            | some random description             |
      | story_type             | bug                                 |
      | current_state          | accepted                            |
      | accepted_at            | "2019-04-20T12:00:00.000Z"          |
    Then I expect the status code is 200
