import Skeleton from "./Skeleton"

export default function CategoryCardSkeleton() {
    return (
        <div className="bg-white border border-black/15 rounded-lg px-6 py-6 hover:border-[#0065F4] transition duration-150">
            <Skeleton className="size-12.5 inline-block" />

            <Skeleton className="h-5 mt-3 w-28" />
            <Skeleton className="h-5 mt-3" />
            <Skeleton className="h-5 mt-1 w-48 " />

            <div className="flex items-center justify-between mt-5">
                <Skeleton className="h-5 w-15" />
                <Skeleton className="h-5 w-15" />
            </div>
        </div>
    )
}
