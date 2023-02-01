import { useRouteError } from "react-router-dom"

export default function Error(){

 // react-router-dom does not give error if the route is not present--> it caches it and can be displayed using useRouterError();
 const err = useRouteError(); 
 // console.log(err);
 const { status, statusText } = err;

 return (
   <>
     <h1>Oops!!!</h1>
     <h2>We can't seem to find page you are looking for</h2>
     <h3>{status + ": " + statusText}</h3>
   </>
 );
}