import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostCardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        className="mb-3 h-fit w-full rounded-md border-2 border-slate-500 bg-slate-800 p-4"
        key={index}
      >
        <div className="flex w-full space-x-4">
          <div className="h-10 w-10">
            <Skeleton circle className="h-full w-full object-contain" />
          </div>
          <div className="w-full">
            <div className="w-1/2">
              <Skeleton />
            </div>
            <div className="w-1/4">
              <Skeleton />
            </div>
            <Skeleton count={3} />
            <hr className="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-3 gap-2 text-center">
              <Skeleton className="w-1/2 py-2 text-center" />
              <Skeleton className="w-1/2 py-2 text-center" />
              <Skeleton className="w-1/2 py-2 text-center" />
            </div>
          </div>
        </div>
      </div>
    ));
};

export default PostCardSkeleton;
