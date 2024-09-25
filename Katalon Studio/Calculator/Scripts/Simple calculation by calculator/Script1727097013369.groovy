import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('C:/Users/natas/eduwork/Katalon Studio/Calculator/mobileapp/Calculator_v8.1.apk', false)

Mobile.tap(findTestObject('Spy_Mobile/threedotbutton'), 0)

Mobile.tap(findTestObject('Spy_Mobile/2_Choose_theme'), 0)

Mobile.tap(findTestObject('Spy_Mobile/3_Dark_theme'), 0)

Mobile.tap(findTestObject('Spy_Mobile/4_Ok_button'), 0)

Mobile.tap(findTestObject('Spy_Mobile/5_number_2_button'), 0)

Mobile.tap(findTestObject('Spy_Mobile/6_number_5_button'), 0)

Mobile.tap(findTestObject('Spy_Mobile/7_devide_button'), 0)

Mobile.tap(findTestObject('Spy_Mobile/6_number_5_button'), 0)

Mobile.tap(findTestObject('Spy_Mobile/9_equals_button'), 0)

Mobile.closeApplication()

