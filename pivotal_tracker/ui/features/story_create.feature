Feature: Create a Story
  As a Owner user,
  I want to create a Story,
  so I can keep track of my Stories.

  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I send a POST request to projects with data:
      | name   | (prefix)_project_(current_datetime) |
      | public | true                                |
    And I login the pivotal tracker web page as owner

  @clean_projects
  Scenario: Verify that I can create a new Story from Backlog
    Given I open the Project Name
    When I create a story with data:
      | story_title | (prefix)story(current_date_time) |
    Then I verify that story_title is displayed on backlog_list
    And I sign out of the pivotal tracker web page
