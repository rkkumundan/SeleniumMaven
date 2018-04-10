$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Test if able to Open Google.com",
  "description": "",
  "id": "test-if-able-to-open-google.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify google.com in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-google.com-in-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "browser should open google",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 11882730555,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_open_google()"
});
formatter.result({
  "duration": 28623255,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 688788537,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify if again user is able to open google.com and can click any link",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-if-again-user-is-able-to-open-google.com-and-can-click-any-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "use clicks any link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the link should open",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 13018463550,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.use_clicks_any_link()"
});
formatter.result({
  "duration": 7164271467,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.the_link_should_open()"
});
formatter.result({
  "duration": 7616655,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 648073413,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify google.com by searching something in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user searches \"\u003csomething\u003e\" in browser",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "browser should open \"\u003csomething\u003e\" searched content",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "browser should close",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;",
  "rows": [
    {
      "cells": [
        "something"
      ],
      "line": 20,
      "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;;1"
    },
    {
      "cells": [
        "Hello World"
      ],
      "line": 21,
      "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;;2"
    },
    {
      "cells": [
        "Rajkumar"
      ],
      "line": 22,
      "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Verify google.com by searching something in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user searches \"Hello World\" in browser",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "browser should open \"Hello World\" searched content",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 10593658662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 15
    }
  ],
  "location": "StepDefinations.user_searches_in_browser(String)"
});
formatter.result({
  "duration": 144312609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 1500716195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 21
    }
  ],
  "location": "StepDefinations.browser_should_open_searched_content(String)"
});
formatter.result({
  "duration": 7722411,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 736655793,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify google.com by searching something in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com;verify-google.com-by-searching-something-in-browser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user searches \"Rajkumar\" in browser",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "browser should open \"Rajkumar\" searched content",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 12759484786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajkumar",
      "offset": 15
    }
  ],
  "location": "StepDefinations.user_searches_in_browser(String)"
});
formatter.result({
  "duration": 94662228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 2452013154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajkumar",
      "offset": 21
    }
  ],
  "location": "StepDefinations.browser_should_open_searched_content(String)"
});
formatter.result({
  "duration": 9093222,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 695852762,
  "status": "passed"
});
});