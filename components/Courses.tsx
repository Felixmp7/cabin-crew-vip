import React from 'react';
import Image from 'next/image';
import coursesImage from '../assets/courses.jpg';

const Courses = (): JSX.Element => (
    <section className="grid grid-cols-2 p-10">
        <div className="w-5/6 mx-auto overflow-hidden rounded-tr-3xl rounded-bl-3xl">
            <Image src={coursesImage} alt="Cursos" width={640} height={428} layout="responsive" />
        </div>
        <div className="p-10">
            <h3 className="text-6xl font-medium text-red-900">Te ofrecemos cursos</h3>
            <h4 className="my-4 text-2xl text-gray-800">
                Para la formación de profesionales y técnicos del medio Aeronáutico.
            </h4>
            <p className="text-xl font-light">
                Te brindaremos una guía direccional, adaptable a las circunstancias del momento, para alcanzar los fines y objetivos de la Empresa.
            </p>
            <div className="mt-10 text-center">
                <button type="button" className="ease primary-button filled hover-shadow">
                    Más info
                </button>
            </div>
        </div>
    </section>
);

export default Courses;
