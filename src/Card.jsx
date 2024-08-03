import { useState } from "react";
import { studentList } from "./students";
import Button from "./Button";

function Card() {
    const [initialCard, setCard] = useState(0);

    const firstCard = studentList[initialCard];
    // console.log(firstCard)

    function handlePrevClick() {
        if (initialCard > 0) {
            setCard(initialCard - 1);
        }
    }

    function handleNextClick() {
        if (initialCard < studentList.length - 1) {
            setCard(initialCard + 1);
        }
    }

    return (
        <article className="max-w-5xl h-fit mx-6 grid auto-rows-fr gap-8 md:gap-0 md:grid-cols-2 relative">
            <section className="relative p-12 lg:p-16 flex flex-col justify-center items-center">
                <img src={firstCard.cover} alt={firstCard.firstName} className="overflow-hidden rounded-lg"/>
                <div className="bg-slate-50 w-20 h-11 rounded-3xl shadow-2xl flex gap-8 justify-center items-center absolute bottom-6 lg:bottom-10 md:left-12">
                    <Button onClick={handlePrevClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/></svg>
                    </Button>
                    <Button onClick={handleNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/></svg>
                    </Button>
                </div>
                <img src="./src/assets/images/pattern-bg.svg" alt="background" className=" absolute top-6 left-0 right-0 -z-10"/>
            </section>
            <section className="relative text-center md:row-start-1 md:self-center md:text-start md:relative md:left-20 lg:left-28">
                <img src="./src/assets/images/pattern-quotes.svg" alt="quotation icon" className="absolute w-14 left-0 right-0 mx-auto md:mx-0 md:-top-8 md:left-8"/>
                <q className="text-xl lg:text-2xl md:font-normal text-gray-600 leading-8 mb-5 block">{firstCard.testimony}</q>
                <section className="flex items-center gap-2">
                    <h1 className="text-lg font-semibold text-blue-950">{firstCard.firstName} {firstCard.lastName}</h1>
                    <p className="text-sm font-medium text-gray-400">{firstCard.profession}</p>
                </section>
            </section>
        </article>
    );
}

export default Card;