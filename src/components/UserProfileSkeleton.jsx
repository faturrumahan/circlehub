import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserProfileSkeleton = () => {
  return (
    <div className="mb-5 flex w-full flex-wrap lg:h-32 lg:justify-between">
      <div className="flex space-x-5">
        <div className="h-32 w-32">
          <Skeleton circle className="h-full w-full object-cover"></Skeleton>
        </div>
        <div className="flex h-full items-center">
          <div>
            <Skeleton className="w-1/2" />
            <Skeleton className="w-1/4" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col space-y-1 lg:mt-0 lg:items-end lg:justify-center">
        <>
          <Skeleton count={4} />
        </>
      </div>
    </div>
  );
};

export default UserProfileSkeleton;
