export function Result() {
  return (
    <>
      <div className="contain flex flex-col space-y-6 py-6 text-center bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl w-64 justify-center items-center text-white">
        <h1 className="">Your Result</h1>
        <div className="circle bg-gradient-to-r from-violet-900/30 to-indigo-900/15 rounded-full w-28 h-28 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold">76</h1>
          <span className="text-xs">of 100</span>
        </div>
        <div className="text space-y-3">
          <h1 className="font-bold ">Great</h1>
          <p className="font-normal text-sm w-52">
            you scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </>
  );
}
