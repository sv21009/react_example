import React from 'react'
import css from 'tailwindcss'
import Image from 'next/image'

const GridComponent = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 max-w-screen max-h-screen">
        <div className="row-span-full col-span-3 bg-blue-400 flex items-center justify-center border-white border-2">
            <div className="text-center">
                <div className = 'font-semibold p-4'>
                    <h3>PUPUSAS </h3>
                </div>
                <Image src="/images/pupusas.jpg" alt="Pupusas" width={200} height={175} />
                <div className = 'font-semibold p-4'>
                    La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena
                    con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.
                    Por su tradición, versatilidad y bajo costo, es una de las comidas más difundidas en El Salvador y Honduras,
                    países que se disputan su origen patrimonial.
                </div>
            </div>
        </div>

        <div className="row-span-3 col-span-2 bg-red-400 flex items-center justify-center border-white border-2">
            <div className="text-center">
                <div className = 'font-semibold p-4'>
                    <h3>PIZZA </h3>
                </div>
                <Image src="/images/pizza.jpg" alt="Pizza" width={200} height={175} />
                <div className = 'font-semibold p-4'>
                    La pizza es una preparación culinaria que consiste en un pan plano,
                    habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal.
                </div>
            </div>
        </div>

        <div className="row-span-2 col-span-2 bg-green-400 flex items-center justify-center border-white border-2">
            <div className="text-center">
                <div className = 'font-semibold p-4'>
                    <h3>TORTA MEXICANA </h3>
                </div>
                <Image src="/images/Torta.jpg" alt="Torta" width={200} height={175} />
                <div className = 'font-semibold p-4'>
                    Una torta es un sándwich mexicano que se elabora con un pan,
                    el cual se parte por la mitad y se rellena de diferentes ingredientes.
                </div>
            </div>
        </div>
    </div>
  );
}

export default GridComponent
