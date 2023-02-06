//! This works partially--> We can only open a text field but cannot close it using its own button.


import { useState } from "react";

const Section1 = ({ title, desc }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-blue-200 p-4 m-4">
      <h2 className="font-semibold text-xl">{title}</h2>
      {isVisible ? (
        <button
          className="w-20 cursor-pointer border border-black p-1 bg-slate-200"
          onClick={() => setIsVisible(false)}
        >
          hide text
        </button>
      ) : (
        <button
          className="w-20 cursor-pointer border border-black p-1 bg-slate-200"
          onClick={() => setIsVisible(true)}
        >
          show text
        </button>
      )}
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Section2 = ({ title2, desc2, isVisible2, setIsVisible2 }) => {
  
  return (
    <div className="border border-blue-200 p-4 m-4">
      <h2 className="font-semibold text-xl">{title2}</h2>
      {isVisible2 ? (
        <button
          className="w-20 cursor-pointer border border-black p-1 bg-slate-200"
          onClick={() => setIsVisible2(false)}
        >
          hide text
        </button>
      ) : (
        <button
          className="w-20 cursor-pointer border border-black p-1 bg-slate-200"
          onClick={() => setIsVisible2(true)}
        >
          show text
        </button>
      )}
      {isVisible2 && <p>{desc2}</p>}
    </div>
  );
};

const InstaMart = () => {
   const [visibleSection, setVisibleSection] = useState(""); // by default no one is open
  return (
    <>
      <h1 className="text-bold text-3xl text-center">Instamart</h1>
      <h2 className="text-2xl">Controlled Accordion</h2>
      <Section2
        title2="About Instamart"
        desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        isVisible2={visibleSection === "about"}
        setIsVisible2={() => setVisibleSection("about")} // writing only this line will allow only one text to be visible. But we cannot close the open text using its button
      />
      <Section2
        title2="Team Instamart"
        desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        isVisible2={visibleSection === "team"}
        setIsVisible2={() => setVisibleSection("team")}
      />
      <Section2
        title2="Career Instamart"
        desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        isVisible2={visibleSection === "career"}
        setIsVisible2={() => setVisibleSection("career")}
      />

      <h2 className="text-2xl mt-12 border-t-4"> Basic Accordion</h2>
      <Section1
        title="Basic- About Instamart"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
      />
      <Section1
        title="Basic- Team Instamart"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
      />
    </>
  );
};

export default InstaMart;

// when we click on Instamart--> react tries to render this but since JS file was not present in the browser but react tries to render it and hence gives error because there is nothing to render until we get JS file==> To avoid error we use "Suspense" and wrap it around the lazyLoading component.
      // by the time react displays what's inside lazy loading we can use Shimmer UI using a prop called "fallback"

// Trying to make "react-accordion" - see in material UI --> 
      // basic accordion--> just toggle to show/hide text--> STATE and PROP ARE NOT SHARED AMONG SECTION
         // each section maintains its own state/prop
      // controlled accordion--> if one text is show rest text should hide==> Transfer the control of state/prop to parent ===> LIFTING THE STATE UP
            // pass props to children and define those props in parent. useState of parent will have to take same nos. of variable as its children has.===> Issue: what if we've 20 children then code will just repeat. ===> Use ID/name
              // isVisible takes boolean value==> for each section use id/name
              // then set
