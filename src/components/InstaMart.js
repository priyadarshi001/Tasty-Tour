

const InstaMart = () => {
 return (
  <>
   <h2> InstaMart </h2>
   <h2> 100s of components inside it</h2>
  </>
 )
}

export default InstaMart;

// we go to Instamart--> react tries to render this but since JS file was not present in the browser but react tries to render it and hence gives error because there is nothing to render until we get JS file==> To avoid error we use "Suspense" and wrap it around the lazyLoading component.
   // by the time react displays what's inside lazy loading we can use Shimmer UI using a prop called "fallback"