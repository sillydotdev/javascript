function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;   // this  keyword is returned implicitily
}
//  const userOne = user("Kamran", 10, true);   
//  const userTwo = user("Danish", 12, false);   // here we have nor used new keyword... which is wrong as the second values will override the first ones.
 const userOne = new user("Kamran", 10, true);
 const userTwo = new user("Danish", 12, false);
 console.log(userOne);
 console.log(userTwo);


 /**
  *  1. new keyword is used to create the new object
  *  2. constructor fuction is called because of new keyword
  *  3. this keyword injects the variables, arguments
  *  4. you get these arguments
  */
 