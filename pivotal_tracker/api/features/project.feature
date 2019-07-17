Feature: Project
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner
    And I save the id after sending a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |

  @functional
  Scenario: Verify that I can get a specific project's information
    When I send a GET request to project
    Then I expect the status code is 200
    And I expect the single response contains last data sent
    And I expect the schema is valid with schema_project

  @functional
  Scenario: Verify that I can delete a specific project
    When I send a DELETE request to project
    Then I expect the status code is 204
    And I send a GET request to project
    And I expect the status code is 403

  @functional
  Scenario: Verify that I can change the name of a project
    When I send a PUT request to project with data:
      | name | (prefix)_new_name_(current_datetime) |
    Then I expect the status code is 200
    And I expect the single response contains last data sent
    And I expect the schema is valid with schema_project

  @functional
  Scenario: Verify that I can change the properties of an already created project
    When I send a PUT request to project with data:
      | name                   | (prefix)_project_(current_datetime) |
      | iteration_length       | 4                                   |
      | week_start_day         | Wednesday                           |
      | point_scale            | 0,1,2,4,8                           |
      | automatic_planning     | false                               |
      | enable_tasks           | true                                |
      | start_date             | "2013-05-01"                        |
      | time_zone              | {"olson_name": "America/La_Paz"}    |
      | enable_incoming_emails | false                               |
      | public                 | true                                |
    Then I expect the status code is 200
    And I expect the schema is valid with schema_project
