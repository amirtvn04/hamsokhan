import { useEffect, useState } from "react";
import { testimonials } from "../data/testimonials";

function AsiedeAuth() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                let next;
                do {
                    next = Math.floor(Math.random() * testimonials.length);
                } while (next === prev);
                return next;
            });
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    const item = testimonials[current];

    return (
        <aside className='flex flex-col items-center justify-center flex-1 border-r basis-1/4 border-black/30 h-full p-16'>
            <div key={current} className="relative w-82.25 sm:w-110 animate-fadeIn">
                <span className="text-9xl absolute -z-10 text-gray-300 -right-8 -top-1">“</span>
                <p className="text-2xl font-bold font-doran leading-14 ">{item.text}</p>

                <div className="flex items-center mt-5">
                    <img className="w-11 h-11 rounded-full grayscale-100 ml-2 mr-3" src="./img/pic.jpeg" alt="#" />
                    <span className="">{item.name}، </span>
                    &nbsp;
                    <span className="text-gray-500">{item.major}</span>
                </div>
            </div>
        </aside>
    )
}

export default AsiedeAuth