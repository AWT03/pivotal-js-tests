Feature: Project

  @gui @functional @clean_projects
  Scenario: Verify that I can create a new Project
    When I login the app as "owner"
    And I fill the form with data
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_account                    |
      | privacy      | true                                |
    And I click on "Create" button
    Then I click on "More" button