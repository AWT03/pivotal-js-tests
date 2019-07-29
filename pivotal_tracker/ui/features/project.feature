Feature: Project
#  Background: Preconditions
#    Given I start a connection with the Pivotal Tracker API
#    And I log in as owner
#    And I save the id after sending a POST request to projects with data:
#      | name | (prefix)_project_(current_datetime) |


  Scenario: Verify that I can create a new Project
    When I login the app as "owner"
    And I fill the form with data
      | project_name | (prefix)_project_(current_datetime) |
      | account      | (prefix)_account                    |
      | privacy      | false                                |
    And I go to "Stories"
    And I create a story with
      |story_title| (prefix)_story_(current_date_time) |
      | task_title  | (prefix)_task_(current_date_time)  |