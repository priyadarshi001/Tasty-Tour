import { createContext } from "react";

// A function that takes in some data that can be used all across the app.

const UserContext = createContext({
  user: {
    name: "Rahul",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext"; // this will help in debugging (in profiler) to see which context to look if i've several context===> Profiler will show like....UserContext.Provider 

export default UserContext;

// now i want to show my name next to log in button
  // now just import useContext and use the data

// To override the default value (provided in UserContext) or update the value --> use Provider [if we just use the Provider it takes the default value I guess!!!]
   // Suppose after API call (using useEffect) i get the data and i pass this to Provider which will then dynamically update the data wherever i want to use the data.
     // e.g., in App.js
     //    <Header />       --> This will not be able to access the user
     //    <UserContext.Provider value={{user: user}}>
     //        <Body />
     //     </UserContext.Provider>
     // This will create a provider for Router too--> see in Profiler (devtool) [after making the necessary changes]
