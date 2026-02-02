import InputField from "../components/elements/InputField"
import ForumCard from "../components/ForumCard"
import { useForums } from "../features/forums/useForums"

function Forums() {
  const { forums, loading } = useForums();

  if (loading) {
    return (<div className="mt-22">صبر کن</div>)
  }

  return (
    <main className='pt-15.5 container-uni'>
      <section className="mt-6">
        <h3>انجمن‌های دانشجویی</h3>
        <p className="text-gray-500 font-semibold mt-3 mb-8">انجمن مورد نظر خود را انتخاب کنید و در گفتگوها شرکت کنید</p>
        <div className="flex items-stretch gap-x-3.5">
          <InputField icon='search' type='text' CustomStyles='w-full pr-12 pl-5 py-3 bg-white' placeholder='جستجو در بین انجمن‌ها...' />
          <div className="relative">
            <svg className="absolute w-5 h-5 -rotate-90 left-4 top-1/2 transform -translate-y-1/2">
              <use href="#chevron-left"></use>
            </svg>
            <select className="custom-select h-full w-46 border border-black/15 rounded-lg pr-4 pl-8 hover:border-[#0065F4] focus:outline-2 focus:border-[#0065F4] focus:outline-[#0065F4] transition duration-150" name="" id="">
              <option value="">همه دسته‌بندی‌ها</option>
            </select>
          </div>
        </div>
      </section>

      <div className="flx">
        {forums.map(item => (
          <section key={item.category.id} className="mt-9">
            <div className="flex items-center gap-x-3 mb-5">
              <h3 className="text-xl mr-3">{item.category.title}</h3>
              <div className="flex-1 border-t border-black/15"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {item.forums.map(item => (
                <ForumCard key={item.id} {...item} author='علی محمدی' replys='۴۴' views='۷۷۶' time='۲ ساعت پیش' />
              ))}
            </div>
          </section>
        ))}
      </div>



    </main>
  )
}

export default Forums