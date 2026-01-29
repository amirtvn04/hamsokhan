import InputField from "../components/elements/InputField"

function Forums() {
  return (
    <main className='pt-15.5 container-uni'>
      <div className="mt-12">
        <h3>دسته‌بندی‌های انجمن</h3>
        <p className="text-gray-500 font-bold mt-3 mb-8">دسته‌بندی مورد نظر خود را انتخاب کنید تا انجمن‌های مرتبط را مشاهده کنید</p>
        <InputField icon='search' type='text' CustomStyles='w-full pr-12 pl-5 py-3 bg-white' placeholder='جستجو در بین انجمن‌ها...' />
      </div>
    </main>
  )
}

export default Forums