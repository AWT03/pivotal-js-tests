Feature: Projects
  Background: Preconditions
    Given I start a connection with the Pivotal Tracker API
    And I log in as owner

  @functional
  Scenario: Verify that I can create a new project
    When I send a POST request to projects with data:
      | name | (prefix)_project_(current_datetime) |
    Then I expect the status code is 200
    And I expect the single response contains last data sent
    And I expect the schema is valid with schema_project

  @functional
  Scenario: Verify that I can set properties while creating a new project
    When I send a POST request to projects with data:
      | name                   | (prefix)_project_(current_datetime) |
      | no_owner               | true                                |
      | status                 | recently opened                     |
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

  # Scenario fails when running in parallel with GUI Tests
  @wip
  Scenario: Verify that I can get the information of various projects
    When I count the already existing projects
    And I send several POST requests to projects with data:
      | name                                 |
      | (prefix)_project1_(current_datetime) |
      | (prefix)_project2_(current_datetime) |
    And I send a GET request to projects
    Then I expect the status code is 200
    And I expect the response is a list that contains 2 new projects
