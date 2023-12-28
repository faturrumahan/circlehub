import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserCardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="flex h-fit w-full flex-col flex-wrap items-center justify-center rounded-lg bg-slate-900 p-2 hover:bg-slate-800"
      >
        <div className="h-10 w-10">
          <Skeleton circle className="h-full w-full object-contain" />
        </div>
        <div className="mt-2 w-full text-center">
          <Skeleton />
        </div>
      </div>
    ));
};

export default UserCardSkeleton;
