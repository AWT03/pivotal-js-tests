Feature: Create Project
  As a Owner user,
  I want to create a Project,
  so I can keep track of my Projects.

  Background: Preconditions
    Given I login the pivotal tracker web page as owner

  @clean_projects
  Scenario: Verify that I can create a new private Project from Dashboard
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Private                             |
    Then I verify that project_name is displayed on header_name
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new public Project from Dashboard
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Public                              |
    Then I verify that project_name is displayed on header_name
    And I verify that privacy is displayed on header_privacy
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new private Project from Main Menu
    Given I go to "Main Menu"
    And I click on "Create Project"
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Private                             |
    Then I verify that project_name is displayed on header_name
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new public Project from Main Menu
    Given I go to "Main Menu"
    And I click on "Create Project"
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Public                              |
    Then I verify that project_name is displayed on header_name
    And I verify that privacy is displayed on header_privacy
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new Private Project from Show All Projects page
    Given I go to "Main Menu"
    And I click on "Show All Projects"
    And I click on "Create Project"
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Private                             |
    Then I verify that project_name is displayed on header_name
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new Public Project from Show All Projects page
    Given I go to "Main Menu"
    And I click on "Show All Projects"
    And I click on "Create Project"
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Public                              |
    Then I verify that project_name is displayed on header_name
    And I verify that privacy is displayed on header_privacy
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new Private Project from User Profile Menu
    Given I go to "User Profile Menu"
    And I click on "Profile"
    And I click on "Accounts"
    And I click on "Create Project" for AWT03_GUI_account account
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Private                             |
    Then I verify that project_name is displayed on header_name
    And I sign out of the pivotal tracker web page

  @clean_projects
  Scenario: Verify that I can create a new Public Project from User Profile Menu
    Given I go to "User Profile Menu"
    And I click on "Profile"
    And I click on "Accounts"
    And I click on "Create Project" for AWT03_GUI_account account
    When I create a project with data:
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_GUI_account                |
      | privacy      | Public                              |
    Then I verify that project_name is displayed on header_name
    And I verify that privacy is displayed on header_privacy
    And I sign out of the pivotal tracker web page