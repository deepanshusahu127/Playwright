import{test,expect} from "@playwright/test";
import { LoginAction } from "../../src/action/loginAction"; 
import loginData  from "../../src/testdata/login.json";
  
test.beforeEach(async ({page})=>{
    await page.goto(loginData.baseURL);
});
test('TC01:Verify user can login with valid credentials',async({page,})=>{
   // const loginAction=new LoginAction(page);
    await loginAction.login(loginData.validUser.username, loginData.validUser.password);
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL(/inventory/);
});
test('TC02:Verify user cannot login with locked out user credentials',async({page})=>{
    const loginAction=new LoginAction(page);
    await loginAction.login(loginData.lockedUser.username, loginData.lockedUser.password);
   
    const errorMessage=await loginAction.getErrorMessage();
    await expect(errorMessage).toHaveText(loginData.lockedUser.errorMessage1);
   
   
});
test('TC03:Verify user cannot login with invalid credentials',async({page})=>{
    const loginAction=new LoginAction(page);
    await loginAction.login(loginData.invalidUser.username, loginData.invalidUser.password);
        const errorMessage=await loginAction.getErrorMessage();
        await expect(errorMessage).toHaveText(loginData.invalidUser.errorMessage2);
        console.log("Update git")
});  
 
   
 