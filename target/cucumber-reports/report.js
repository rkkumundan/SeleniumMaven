$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Test if able to Open Google.com and Facebook.com",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User able to Login Facebook",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;user-able-to-login-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user logs in facebook with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and submits form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login facebook successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should close",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;user-able-to-login-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "test-if-able-to-open-google.com-and-facebook.com;user-able-to-login-facebook;;1"
    },
    {
      "cells": [
        "rkkumundan",
        "raj201988"
      ],
      "line": 10,
      "id": "test-if-able-to-open-google.com-and-facebook.com;user-able-to-login-facebook;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User able to Login Facebook",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;user-able-to-login-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user logs in facebook with \"rkkumundan\" and \"raj201988\" and submits form",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be login facebook successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_facebook_in_browser()"
});
formatter.result({
  "duration": 10158164846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rkkumundan",
      "offset": 28
    },
    {
      "val": "raj201988",
      "offset": 45
    }
  ],
  "location": "StepDefinations.user_logs_in_facebook_with_and_and_submits_form(String,String)"
});
formatter.result({
  "duration": 27452259026,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_be_login_facebook_successfully()"
});
formatter.result({
  "duration": 14388601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 715297121,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify google.com in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-in-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "browser should open google",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 8456231342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_open_google()"
});
formatter.result({
  "duration": 10413162,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 618902638,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify if again user is able to open google.com and can click any link",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;verify-if-again-user-is-able-to-open-google.com-and-can-click-any-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "use clicks any link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the link should open",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 6212566209,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.use_clicks_any_link()"
});
formatter.result({
  "duration": 3011713468,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.the_link_should_open()"
});
formatter.result({
  "duration": 15458208,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 672448583,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify google.com by searching something in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-by-searching-something-in-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user searches \"\u003csomething\u003e\" in browser",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "browser should open \"\u003csomething\u003e\" searched content",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "browser should close",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-by-searching-something-in-browser;",
  "rows": [
    {
      "cells": [
        "something"
      ],
      "line": 30,
      "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-by-searching-something-in-browser;;1"
    },
    {
      "cells": [
        "Hello World"
      ],
      "line": 31,
      "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-by-searching-something-in-browser;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Verify google.com by searching something in Browser",
  "description": "",
  "id": "test-if-able-to-open-google.com-and-facebook.com;verify-google.com-by-searching-something-in-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "open google in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user searches \"Hello World\" in browser",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "submits the page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "browser should open \"Hello World\" searched content",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "browser should close",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.open_google_in_browser()"
});
formatter.result({
  "duration": 6738658462,
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
  "duration": 119390364,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.submits_the_page()"
});
formatter.result({
  "duration": 1338826690,
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
  "duration": 6191405,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.browser_should_close()"
});
formatter.result({
  "duration": 633655361,
  "status": "passed"
});
});