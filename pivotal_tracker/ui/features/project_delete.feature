Feature: Delete a Project
  As a Owner user,
  I want to delete a Project,
  so I can not have old Projects.

  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I send a POST request to projects with data:
      | name   | (prefix)_project_(current_datetime) |
      | public | true                                |
    And I login the pivotal tracker web page as owner

  @clean_projects
  Scenario: Verify that I can delete a Project in More page from Dashboard
    When I open the Project Name
    And I click on "More"
#    And I click on "Delete"
#    Then I verify that "success_delete" message is displayed for "project_name"
    And I sign out of the pivotal tracker web page
