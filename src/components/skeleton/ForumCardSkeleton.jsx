import Skeleton from "./Skeleton"

export default function ForumCardSkeleton() {
    return (
        <section className="mt-9">
            <div className="flex items-center gap-x-3 mb-5">
                <Skeleton className="h-7 w-38 mr-3" />
                <div className="flex-1 border-t border-black/15"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="py-5 px-6 rounded-lg bg-white border border-black/15 hover:border-[#0065F4] transition-colors duration-150">
                        <div className="flex items-start justify-between">
                            <div>
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-5 w-60 mt-2" />
                            </div>
                        </div>

                        <div className="border-t border-black/15 w-full my-4"></div>

                        <div className="text-gray-500 flex items-center justify-between mt-2 mr-1.5 text-sm w-full">
                            <div className="flex items-center gap-x-6">
                                <div className="flex items-center gap-x-1">
                                    <Skeleton className='h-5 w-18' />
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <Skeleton className='h-5 w-18' />
                                </div>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <Skeleton className='h-5 w-20' />
                                <Skeleton className='h-5 w-20' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
