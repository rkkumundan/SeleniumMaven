package com.google.main;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class MainContent {
	WebDriver driver;
	public MainContent(WebDriver driver){
		this.driver=driver;     
	}
	public void user_is_on_Home_Page() throws Throwable {
		driver.get("http://www.google.com");
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	public void user_is_checking_assertions(){
		String ActualTitle = driver.getTitle();
		String ExpectedTitle = "Google";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void user_is_searching_the_content(String Search){
		driver.findElement(By.id("lst-ib")).sendKeys(Search);
	}
	public void user_hits_enter() {
		driver.findElement(By.id("lst-ib")).sendKeys(Keys.ENTER);
	}
	public void user_getting_searched_content(String Search) {
		String ActualSearch = driver.getTitle();
		String ExpectedSearch = Search+" - Google Search";
		assertThat(ActualSearch, equalTo(ExpectedSearch));
	}
	public void user_is_able_to_click_link(){
		driver.findElement(By.partialLinkText("Gmail")).click();
	}
	public void check_assertion_for_the_link(){
		String GmailTitle = "Gmail - Free Storage and Email from Google";
		String ExpectedTitle = driver.getTitle();
		assertThat(GmailTitle, equalTo(ExpectedTitle));
	}
	public void user_is_closing_browser(){
		driver.quit();
	}
	public void user_is_on_Home_Page_for_Facebook() throws Throwable {
		driver.get("http://www.facebook.com");
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	public void user_able_to_send_username_password(String username, String password) {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
		driver.findElement(By.id("pass")).sendKeys(Keys.ENTER);
	}
	public void check_assertion_for_the_fb_link(){
		String FBTitle = "Facebook";
		String ExpectedTitle = driver.getTitle();
		assertThat(FBTitle, equalTo(ExpectedTitle));
	}
}
