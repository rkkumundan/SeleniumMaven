Feature: Test if able to Open Google.com
Scenario: Verify google.com in Browser
Given open google in browser
Then browser should open google
And browser should close

Scenario: Verify if again user is able to open google.com and can click any link
Given open google in browser
When use clicks any link
Then the link should open
And browser should close

Scenario Outline: Verify google.com by searching something in Browser
Given open google in browser
When user searches "<something>" in browser
And submits the page
Then browser should open "<something>" searched content
And browser should close
 Examples:
    | something  |
    | Hello World|
    | Rajkumar   |
  
 
