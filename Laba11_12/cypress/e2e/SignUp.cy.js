import SignUp from "./PageObject/SignUp";

describe('sign Up', () => {

  it('Input information', () => {
    SignUp.visit();
    SignUp.inputPersonData();
  })

})