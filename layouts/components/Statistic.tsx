import CountUp from "react-countup";

export default function Statistic() {
  const onComplete = () => {
    console.log("Completed! 👏");
  };

  const onStart = () => {
    console.log("Started! 💨");
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-4 md:lg:grid-cols-2 grid-cols-1">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              <CountUp
                className="Downloads"
                start={0}
                end={25589}
                duration={10}
                useEasing={true}
                separator=","
              />
            </h6>
            <div className="flex itemsc-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
              <svg
                className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Downloads</p>
          <p className="text-gray-700">
            Fusce tristique nisi et risus gravida aliquam. Sed pretium rhoncus velit nec sollicitudin. Integer vitae posuere risus. Phasellus nec semper ligula.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
            <CountUp
                className="Subscribers"
                start={0}
                end={356124}
                duration={10}
                useEasing={true}
                separator=","
              />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
              <svg
                className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Subscribers</p>
          <p className="text-gray-700">
            Fusce tristique nisi et risus gravida aliquam. Sed pretium rhoncus velit nec sollicitudin. Integer vitae posuere risus. Phasellus nec semper ligula.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
            <CountUp
                className="Cookies"
                start={0}
                end={6551233}
                duration={10}
                useEasing={true}
                separator=","
              />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
              <svg
                className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Cookies</p>
          <p className="text-gray-700">
            Fusce tristique nisi et risus gravida aliquam. Sed pretium rhoncus velit nec sollicitudin. Integer vitae posuere risus. Phasellus nec semper ligula.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
            <CountUp
                className="Users"
                start={0}
                end={981235}
                duration={10}
                useEasing={true}
                separator=","
              />
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-[35px] h-[35px]">
              <svg
                className="bg-blue-300 rounded-full p-2 w-[35px] h-[35px]"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Users</p>
          <p className="text-gray-700">
            Fusce tristique nisi et risus gravida aliquam. Sed pretium rhoncus velit nec sollicitudin. Integer vitae posuere risus. Phasellus nec semper ligula.
          </p>
        </div>
      </div>
    </div>
  );
};
