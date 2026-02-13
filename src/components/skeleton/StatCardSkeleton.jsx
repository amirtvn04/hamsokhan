import Skeleton from './Skeleton'

export default function StatCardSkeleton() {
    return (
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-150">
            <Skeleton className="w-18 h-7 animate-loading" />

            <Skeleton className="w-10 h-4.5 mt-1.5 text-gray-500" />
        </div>
    )
}
