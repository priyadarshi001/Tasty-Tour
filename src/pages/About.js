import { Outlet } from "react-router-dom"
// instead of using Outlet we can just import <Profile />

export default function About() {
  return(
    <>
    <h1>About Us Page</h1>
    <p>This is about section of my Tasty Tour</p>
    <Outlet />
    </>
  )
}
