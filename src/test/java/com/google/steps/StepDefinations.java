package com.google.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.google.main.MainContent;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations{
	public WebDriver driver = new ChromeDriver();
	@Given("^open google in browser$")
	public void open_google_in_browser() throws Throwable {
		new MainContent(driver).user_is_on_Home_Page();
	}
	@Then("^browser should open google$")
	public void browser_should_open_google() throws Throwable {
		new MainContent(driver).user_is_checking_assertions();
	}
	@Then("^browser should close$")
	public void browser_should_close() throws Throwable {
		new MainContent(driver).user_is_closing_browser();
	}
	@When("^user searches \"(.*?)\" in browser$")
	public void user_searches_in_browser(String arg1) throws Throwable {
		new MainContent(driver).user_is_searching_the_content(arg1);
	}

	@When("^submits the page$")
	public void submits_the_page() throws Throwable {
		new MainContent(driver).user_hits_enter();
	}

	@Then("^browser should open \"(.*?)\" searched content$")
	public void browser_should_open_searched_content(String arg1) throws Throwable {
		new MainContent(driver).user_getting_searched_content(arg1);

	}
	@When("^use clicks any link$")
	public void use_clicks_any_link() throws Throwable {
		new MainContent(driver).user_is_able_to_click_link();
	}

	@Then("^the link should open$")
	public void the_link_should_open() throws Throwable {
		new MainContent(driver).check_assertion_for_the_link();
	}

	@Given("^open facebook in browser$")
	public void open_facebook_in_browser() throws Throwable {
		new MainContent(driver).user_is_on_Home_Page_for_Facebook();
	}

	@When("^user logs in facebook with \"(.*?)\" and \"(.*?)\" and submits form$")
	public void user_logs_in_facebook_with_and_and_submits_form(String arg1, String arg2) throws Throwable {
		new MainContent(driver).user_able_to_send_username_password(arg1, arg2);
	}

	@Then("^user should be login facebook successfully$")
	public void user_should_be_login_facebook_successfully() throws Throwable {
		new MainContent(driver).check_assertion_for_the_fb_link();
	}




}
