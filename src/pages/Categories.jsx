import CategoryCard from "../components/CategoryCard"
import InputField from "../components/elements/InputField"
import CategoryCardSkeleton from "../components/skeleton/CategoryCardSkeleton";
import StatCardSkeleton from "../components/skeleton/StatCardSkeleton";
import { useCategories } from "../features/forums/useCategories"
import { useGlobalStats } from "../features/forums/useGlobalStats"

function Categories() {
  const { categories, Categoryloading } = useCategories();
  const { global, Globalloading } = useGlobalStats();

  return (
    <main className='pt-15.5 container-uni'>
      <div className="mt-6">
        <h3>دسته‌بندی‌های انجمن</h3>
        <p className="text-gray-500 font-semibold mt-3 mb-8">دسته‌بندی مورد نظر خود را انتخاب کنید تا انجمن‌های مرتبط را مشاهده کنید</p>
        <InputField icon='search' type='text' CustomStyles='w-full pr-12 pl-5 py-3 bg-white' placeholder='جستجو در بین دسته‌بندی‌ها...' />
      </div>

      <div className="grid grid-cols-4 gap-3.5 mt-8 mb-8">
        {Globalloading ?
          Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))
          :
          global.length > 0 && (
            <>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-150">
                <span className="font-bold text-2xl">{global[0]?.categories_count.toLocaleString('fa-IR')}</span>
                <span className="text-sm text-gray-500">دسته بندی</span>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-150">
                <span className="font-bold text-2xl">{global[0]?.forums_count.toLocaleString('fa-IR')}</span>
                <span className="text-sm text-gray-500">انجمن</span>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-150">
                <span className="font-bold text-2xl">{global[0]?.topics_count.toLocaleString('fa-IR')}</span>
                <span className="text-sm text-gray-500">تاپیک</span>
              </div>
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-150">
                <span className="font-bold text-2xl">{global[0]?.posts_count.toLocaleString('fa-IR')}</span>
                <span className="text-sm text-gray-500">پست</span>
              </div>
            </>
          )
        }
      </div>

      <section className="grid grid-cols-4 gap-3.5">
        {Categoryloading ?
          Array.from({ length: 8 }).map((_, i) => (
            <CategoryCardSkeleton key={i} />
          ))
          :
          categories.map(cat => (
            <CategoryCard key={cat.id} {...cat} />
          ))
        }

      </section>
    </main>
  )
}

export default Categories