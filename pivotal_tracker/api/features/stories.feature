Feature: Stories
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |

  @functional
  Scenario: Verify that I can create a new story
    When I send a POST request to stories with data:
      | name | (prefix)_story_(current_datetime) |
    Then I expect the status code is 200
    And I expect the single response contains last data sent

  @functional
  Scenario: Verify that I can set properties while creating a new story
    When I send a POST request to stories with data:
      | name                   | (prefix)_project_(current_datetime) |
      | description            | some random description             |
      | story_type             | bug                                 |
      | current_state          | accepted                            |
      | accepted_at            | "2019-04-20T12:00:00.000Z"          |
    Then I expect the status code is 200

  @functional
  Scenario: Verify that I can get the information of various story
    When I count the already existing stories
    And I send several POST requests to stories with data:
      | name                               |
      | (prefix)_story1_(current_datetime) |
      | (prefix)_story2_(current_datetime) |
      | (prefix)_story3_(current_datetime) |
    And I send a GET request to stories
    Then I expect the status code is 200
    And I expect the response is a list that contains 3 new stories
