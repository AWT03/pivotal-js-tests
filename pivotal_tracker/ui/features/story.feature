Feature: Story
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name       | (prefix)_project_(current_datetime) |
      | account_id | 1105215                             |

  @clean_projects @wip
  Scenario: Verify that I can create a new Story
    When I login the pivotal tracker web page as owner
    And I open the last project created
