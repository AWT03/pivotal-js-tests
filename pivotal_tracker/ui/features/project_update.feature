Feature: Update a Project
  As a user,
  I want to update a Project,
  so I can not use outdated information.

  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I send a POST request to projects with data:
      | name   | (prefix)_project_(current_datetime) |
      | public | true                                |
    And I login the pivotal tracker web page as owner

  @clean_projects
  Scenario: Verify that I can update a Project in More page from Dashboard
    When I open the Project Name
    And I click on "More"
    And I update a project with
      | name        | (prefix)_new_project_(current_datetime) |
      | description | This project is going to update         |
    Then I verify that "changes_saved" message is displayed
    And I go to "Dashboard"
    And I verify project_name is displayed on projects_list
    And I sign out of the pivotal tracker web page
