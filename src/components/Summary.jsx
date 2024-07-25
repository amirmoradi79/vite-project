export function Summary() {
  return (
    <>
      <div className="flex flex-col space-y-7 bg-slate-100 rounded-xl w-64 p-4">
        <h1>Summary</h1>
        {Array(4).fill(
          <div className="reaction bg-pink-100 flex space-x-24 py-3 px-1 rounded-lg">
            <div className="text-red-500">Reaction</div>
            <div className="text-red-500">80/100</div>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button className="rounded-3xl bg-gray-700 text-white w-[80%]">
            continue
          </button>
        </div>
      </div>
    </>
  );
}
