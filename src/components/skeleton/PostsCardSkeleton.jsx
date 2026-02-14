import Skeleton from './Skeleton'

export default function PostsCardSkeleton() {
    return (
        <div className="flex gap-x-9 border border-black/15 py-6 px-9 rounded-lg bg-white">
            <div className="w-30 flex flex-col items-center">
                <Skeleton className='size-17 rounded-full' />
                <Skeleton className='h-5.5 mt-2 w-20' />
                <Skeleton className='h-5.5 mt-2 w-29' />

                <div className="flex flex-col items-center mt-1.5 gap-y-0.5">
                    <Skeleton className='h-13 w-16' />

                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <Skeleton className="flex-1" />

                <div className="w-full border-t border-black/15 mt-6"></div>

                <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-x-1 font-semibold">
                            <Skeleton className='h-6 w-16' />
                        </div>
                        <div className="flex items-center gap-x-1 font-semibold">
                            <Skeleton className='h-6 w-16' />
                        </div>
                        <div className="px-2 py-2 rounded-lg">
                            <Skeleton className='h-6 w-16' />
                        </div>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <Skeleton className='h-6 w-10' />
                        <Skeleton className='h-6 w-10' />
                        <Skeleton className='h-6 w-10' />
                    </div>
                </div>
                <span className="mt-4 inline-block">

                </span>

            </div>
        </div>
    )
}
