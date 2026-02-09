import { academic_degree } from "../../utils/degrees";

export default function EducationStatus({ degree }) {
    const EducationClass = {
        bachelor: 'bg-blue-100 text-blue-700',
        master: 'bg-green-100 text-green-700',
        doctorate: 'bg-slate-100 text-slate-700',
        postdoc: 'bg-slate-100 text-slate-700',
    };

    return (
        <span className={`${EducationClass[degree]} rounded-lg text-xs font-semibold px-2 py-1 mt-1.5`}>
            {academic_degree(degree)}
        </span>
    )
}
