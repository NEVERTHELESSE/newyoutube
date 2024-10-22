function Loading() {
  return (
    <div className="w-[400px] mr-2 mt-3 inline-block" >
      <div className=" h-[14rem] bg-gray-400  rounded-2xl  w-full animate-pulse"></div>
      <div className="my-2 flex items-center">
        <div className="min-w-[50px] min-h-[50px] size-[50px] bg-gray-500 rounded-full animate-pulse"></div>
        <div className="ml-3">
          <div className="h-[17px] w-[20rem] bg-gray-400 animate-pulse rounded-full "></div>
          <div className="h-[17px] mt-1 w-[17rem] bg-gray-300 animate-pulse rounded-full "></div>
          <div className="h-[17px] mt-1 w-[20rem] bg-gray-300 animate-pulse rounded-full "></div>
        </div>
      </div>
    </div>
  );
}

function Load() {
  return (
    <div className="grid place-content-center">
      <div className="size-[6rem]  border-blue-500 rounded-full border-[10px] animate-spin border-t-transparent"></div>
      <p>Getting new post...</p>
    </div>
  );
}

function Homeskeleton({ limit }) {
  return Array(limit).fill(<Loading />);
}

export default Homeskeleton;
