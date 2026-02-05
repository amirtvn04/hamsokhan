import { Link } from "react-router-dom";

const categoryIcons = {
    'educational-affairs': 'education',
    'student-affairs': 'tea',
    'academic-majors': 'science',
    'technology-software': 'code',
    'career-opportunities': 'suitcase',
    'cultural-activities': 'idea',
    'sports-recreation': 'football',
    'graduate-studies': 'user-star',
};

const colorVariants = [
    { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300' },
    { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' },
    { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-300' },
    { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-300' },
    { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' },
    { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-300' },
    { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-300' },
    { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-300' },
    { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
];

export default function CategoryCard({ title, description, topics_count, forums_count, slug, order_index = 0 }) {

    const Icon = categoryIcons[slug] || 'idea';
    const color = colorVariants[order_index % colorVariants.length];

    return (
        <div className="group bg-white border border-black/15 rounded-lg px-6 py-6 hover:border-[#0065F4] transition-colors duration-150">
            <div className={`p-3 rounded-lg ${color.bg} border ${color.border} inline-block group-hover:scale-115 transition duration-150`} >
                <svg className={`w-6 h-6 ${color.text}`}>
                    <use href={"#" + Icon}></use>
                </svg>
            </div>
            <Link to={`/forums/${slug}`}>
                <h5 className="tex font-semibold mt-3">{title}</h5>
            </Link>
            <p className="line-clamp-2 text-gray-500 mt-1 text-sm leading-6 min-h-12">{description}</p>
            <div className="flex items-center justify-between text-gray-500 text-sm mt-5">
                <span>
                    {forums_count.toLocaleString('fa-IR')}
                    {" "}
                    انجمن
                </span>
                <span>
                    {topics_count.toLocaleString('fa-IR')}
                    {" "}
                    تاپیک
                </span>
            </div>

        </div>
    )
}
