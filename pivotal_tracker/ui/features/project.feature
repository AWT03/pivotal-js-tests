Feature: Project

  @clean_projects
  Scenario: Verify that I can create a new Project
    When I login the pivotal tracker web page as owner
    And I create a project with data:
      | project_name    | (prefix)_project_(current_datetime) |
      | account         | (prefix)_GUI_account                |
      | privacy         | public                              |
