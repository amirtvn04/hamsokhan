import { academic_degree } from "../../utils/degrees";

export default function EducationStatus({ degree }) {
    const EducationClass = {
        bachelor: 'bg-blue-100 text-blue-700',
        master: 'bg-teal-100 text-teal-700',
        doctorate: 'bg-violet-100 text-violet-700',
        postdoc: 'bg-purple-100 text-purple-700',
        graduate: 'bg-green-100 text-green-700',
    };

    return (
        <span className={`${EducationClass[degree]} rounded-lg text-xs text-center text-balance font-semibold px-2 py-1 mt-1.5`}>
            {academic_degree(degree)}
        </span>
    )
}
