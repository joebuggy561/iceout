import React from "react";
import ActivityMap from "./ActivityMap";
const Hero = () => {
  return (
    <>
      <main className="pt-16 md:pt-20 mb-16">
        <section className="py-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              ICE Activity Tracker
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-center">
              IceOut tracks publicly reported immigration enforcement activity
              to promote transparency and public awareness.
            </p>
          </div>
        </section>
         <section className="px-4 md:px-8 pb-10 ">
        <ActivityMap />
        <p className="text-xs text-muted-foreground text-center mt-4">
          Map reflects locations mentioned in publicly available reporting.
        </p>
      </section>
      </main>
     
    </>
  );
};

export default Hero;
