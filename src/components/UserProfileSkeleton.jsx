import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserProfileSkeleton = () => {
  return (
    <div className="mb-5 flex w-full flex-wrap lg:h-32 lg:justify-between">
      <div className="flex w-3/4 space-x-5">
        <div className="h-32 w-32">
          <Skeleton
            circle
            className="h-full w-full object-contain"
            baseColor="#203141"
          ></Skeleton>
        </div>
        <div className="w-1/2">
          <div className="flex h-full flex-col justify-center">
            <Skeleton className="w-3/4" baseColor="#203141" />
            <Skeleton className="w-1/4" baseColor="#203141" />
          </div>
        </div>
      </div>
      <div className="mt-2 w-1/4">
        <Skeleton count={4} baseColor="#203141" />
      </div>
    </div>
  );
};

export default UserProfileSkeleton;
