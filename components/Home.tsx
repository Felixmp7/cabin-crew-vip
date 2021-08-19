/* eslint-disable max-len */
import React from 'react';

const Home = (): JSX.Element => (
    <section data-testid="home-section" className="relative h-screen home-bg">
        <div className="absolute inset-x-0 mx-auto text-center top-32">
            <h1 className="font-light text-red-900 text-7xl comfortaa">Cabin Crew VIP Training</h1>
            <h2 className="text-3xl comfortaa">Tu Centro de Instrucción Aeronáutica</h2>
        </div>
        <div className="absolute inset-x-0 text-center bottom-20">
            <button
                type="button"
                className="px-5 py-3 text-lg font-medium leading-none text-red-900 transition-all duration-500 border-2 border-red-900 rounded ease hover:bg-red-900 hover:text-white"
            >
                Comenzar
            </button>
        </div>
    </section>
);

export default Home;
