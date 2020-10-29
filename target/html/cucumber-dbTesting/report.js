$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DatabaseBatch7.feature");
formatter.feature({
  "name": "Syntax HRM Database Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dbBatch7"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I create connection to SyntaxHRM database",
  "keyword": "Given "
});
formatter.match({
  "location": "dbStepsBatch7.i_create_connection_to_SyntaxHRM_database()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I create statement object",
  "keyword": "And "
});
formatter.match({
  "location": "dbStepsBatch7.i_create_statement_object()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dbBatch7"
    },
    {
      "name": "@jobTitlesBatch7"
    }
  ]
});
formatter.step({
  "name": "I execute query for jobtitle verification",
  "keyword": "When "
});
formatter.match({
  "location": "dbStepsBatch7.i_execute_query_for_jobtitle_verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate job titles with an external excel file",
  "keyword": "Then "
});
formatter.match({
  "location": "dbStepsBatch7.i_validate_job_titles_with_an_external_excel_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close connections",
  "keyword": "And "
});
formatter.match({
  "location": "dbStepsBatch7.i_close_connections()"
});
formatter.result({
  "status": "skipped"
});
});