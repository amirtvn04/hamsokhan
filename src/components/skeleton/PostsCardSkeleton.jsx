import Skeleton from './Skeleton'

export default function PostsCardSkeleton() {
    return (
        <div className="flex flex-col sm:flex-row gap-x-9 border border-black/15 py-5 px-6 sm:py-6 sm:px-9 rounded-lg bg-white">
            <div className="sm:w-30 flex sm:flex-col items-start sm:items-center gap-x-2 sm:gap-x-0">
                <Skeleton className='size-10 sm:size-17 rounded-full shrink-0' />
                <Skeleton className='h-5.5 mt-2 w-15 sm:w-20' />
                <Skeleton className='h-5.5 mt-2 w-15 sm:w-29' />

                <div className="mt-1.5 gap-y-0.5 hidden sm:inline-block">
                    <Skeleton className='h-13 w-16' />
                </div>
            </div>
            <Skeleton className='w-full h-20 mt-5 sm:hidden' />
            <div className="flex-1 flex flex-col">
                <Skeleton className="flex-1" />

                <div className="w-full border-t border-black/15 mt-6"></div>

                <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center gap-x-2 sm:gap-x-4">
                        <div className="flex items-center gap-x-1 font-semibold">
                            <Skeleton className='h-6 w-10 sm:w-16' />
                        </div>
                        <div className="flex items-center gap-x-1 font-semibold">
                            <Skeleton className='h-6 w-10 sm:w-16' />
                        </div>
                        <div className="px-2 py-2 rounded-lg">
                            <Skeleton className='h-6 w-10 sm:w-16' />
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3 sm:gap-x-6">
                        <Skeleton className='h-6 w-6 sm:w-10' />
                        <Skeleton className='h-6 w-6 sm:w-10' />
                        <Skeleton className='h-6 w-6 sm:w-10' />
                    </div>
                </div>
                <span className="mt-4 inline-block">

                </span>

            </div>
        </div>
    )
}
