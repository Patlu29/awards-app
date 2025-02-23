import React from "react";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex-size-full flex-col  justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-circular-web text-lg text-blue-50">
            Into The Visual World Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            🚀 Dive into a world of adventure, strategy, and stunning
            animations. Whether you're here to challenge yourself, explore new
            realms, or just have fun, it brings a seamless and visually
            captivating experience right to your browser.
          </p>
        </div>
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>radint</b>
              </>
            }
            description="A cross-platform meta game app, turning your activities across Web2 and Web3 games into a rewarding adventure"
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  <b>sigma</b>
                </>
              }
              description="A cross-platform meta game app, turning your activities across Web2 and Web3 games into a rewarding adventure"
            />
          </div>
          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  <b>nexus</b>
                </>
              }
              description="A cross-platform meta game app, turning your activities across Web2 and Web3 games into a rewarding adventure"
            />
          </div>
          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>azul</b>
                </>
              }
              description="A cross-platform meta game app, turning your activities across Web2 and Web3 games into a rewarding adventure"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
