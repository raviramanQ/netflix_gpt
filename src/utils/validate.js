export const checkValidData = (email,password) =>{

   const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

   const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if(!isEmailValid) return 'please enter valid email';

   if(!isPassword) return 'please enter valid password';

   return null;


}