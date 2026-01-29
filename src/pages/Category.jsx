import CategoryCard from "../components/CategoryCard"
import InputField from "../components/elements/InputField"

function Category() {
  return (
    <main className='pt-15.5 container-uni'>
      <div className="mt-12">
        <h3>دسته‌بندی‌های انجمن</h3>
        <p className="text-gray-500 font-semibold mt-3 mb-8">دسته‌بندی مورد نظر خود را انتخاب کنید تا انجمن‌های مرتبط را مشاهده کنید</p>
        <InputField icon='search' type='text' CustomStyles='w-full pr-12 pl-5 py-3 bg-white' placeholder='جستجو در بین انجمن‌ها...' />
      </div>

      <div className="grid grid-cols-4 gap-3.5 mt-8 mb-8">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-200">
          <span className="font-bold text-2xl">۱۶</span>
          <span className="text-sm text-gray-500">دسته بندی</span>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-200">
          <span className="font-bold text-2xl">۷۷</span>
          <span className="text-sm text-gray-500">انجمن</span>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-200">
          <span className="font-bold text-2xl">۱۳۰,۰۰۰+</span>
          <span className="text-sm text-gray-500">تاپیک</span>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-black/15 hover:border-[#0065F4] transition duration-200">
          <span className="font-bold text-2xl">۳۰۰,۰۰۰+</span>
          <span className="text-sm text-gray-500">پست</span>
        </div>
      </div>
        
      <div className="grid grid-cols-4 gap-3.5 mb-30">
            <CategoryCard index='0' title='مهندسی کامپیوتر' subtitle='برنامه‌نویسی، الگوریتم، هوش مصنوعی و تکنولوژی' topics='۱۵,۳۰۰'forums='۳' icon='code' />
            <CategoryCard index='1' title='مهندسی برق و الکترونیک' subtitle='مدارها، سیگنال‌ها و سیستم‌های دیجیتال' topics='۴,۵۷۷'forums='۵' icon='science' />
            <CategoryCard index='2' title='فرصت های شغلی' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۳,۴۳۲'forums='۲' icon='suitcase' />
            <CategoryCard index='3' title='زندگی دانشجویی' subtitle='خوابگاه، تغذیه و فعالیت‌های دانشجویی' topics='۶,۴۴۳'forums='۷' icon='education' />
            <CategoryCard index='4' title='پروژه ها و ایده ها' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۶,۶۶۴'forums='۴' icon='idea' />
            <CategoryCard index='5' title='گفتگوی آزاد' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۲,۳۲۴'forums='۲' icon='tea' />
            <CategoryCard index='0' title='مهندسی کامپیوتر' subtitle='برنامه‌نویسی، الگوریتم، هوش مصنوعی و تکنولوژی' topics='۱۵,۳۰۰'forums='۳' icon='code' />
            <CategoryCard index='1' title='مهندسی برق و الکترونیک' subtitle='مدارها، سیگنال‌ها و سیستم‌های دیجیتال' topics='۴,۵۷۷'forums='۵' icon='science' />
            <CategoryCard index='2' title='فرصت های شغلی' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۳,۴۳۲'forums='۲' icon='suitcase' />
            <CategoryCard index='5' title='گفتگوی آزاد' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۲,۳۲۴'forums='۲' icon='tea' />
            <CategoryCard index='0' title='مهندسی کامپیوتر' subtitle='برنامه‌نویسی، الگوریتم، هوش مصنوعی و تکنولوژی' topics='۱۵,۳۰۰'forums='۳' icon='code' />
            <CategoryCard index='1' title='مهندسی برق و الکترونیک' subtitle='مدارها، سیگنال‌ها و سیستم‌های دیجیتال' topics='۴,۵۷۷'forums='۵' icon='science' />
            <CategoryCard index='2' title='فرصت های شغلی' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۳,۴۳۲'forums='۲' icon='suitcase' />
            <CategoryCard index='3' title='زندگی دانشجویی' subtitle='خوابگاه، تغذیه و فعالیت‌های دانشجویی' topics='۶,۴۴۳'forums='۷' icon='education' />
            <CategoryCard index='4' title='پروژه ها و ایده ها' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۶,۶۶۴'forums='۴' icon='idea' />
            <CategoryCard index='5' title='گفتگوی آزاد' subtitle='فیزیک، شیمی و زیست‌شناسی' topics='۲,۳۲۴'forums='۲' icon='tea' />
      </div>
    </main>
  )
}

export default Category