import Skeleton from './Skeleton'

export default function TopicCardSkeleton() {
    return (
        <div className="py-4 px-5 rounded-lg bg-white border border-black/15 flex justify-between">
            <div className="flex items-center gap-x-3 flex-1">
                <Skeleton className='size-12 rounded-full' />
                <div>
                    <Skeleton className='h-6 w-32' />
                    <Skeleton className='h-5 w-60 mt-2' />

                </div>
            </div>

            <div className="flex items-start gap-x-8 basis-1/4">
                <div className="flex items-center gap-x-1">
                    <Skeleton className='h-5 w-18' />
                </div>
                <div className="flex items-center gap-x-1">
                    <Skeleton className='h-5 w-18' />
                </div>
            </div>
            <div className="flex flex-col items-end justify-between w-35">
                <Skeleton className='h-5 w-18' />
                <Skeleton className='h-5 w-28' />
            </div>
        </div>
    )
}
