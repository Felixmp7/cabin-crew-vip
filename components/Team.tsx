import React from 'react';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import Member from './widgets/Member';

const Team = (): JSX.Element => (
    <section>
        <div className="py-24 text-center text-white team-banner-bg">
            <h3 className="mb-5 text-6xl font-medium">Nuestro equipo profesional</h3>
            <span className="text-3xl font-light">
                Contamos con un capital humano excepcional, certificados y con mayor
                <br />
                experiencia en el área de tripulación de cabina.
            </span>
        </div>
        <div className="w-3/4 mx-auto my-10">
            <div className="grid grid-cols-3 justify-items-center">
                <Member image={team3} name="Lic. Diana Gómez" charge="Directora" />
                <Member image={team1} name="Cap. Martin Borges" charge="Director Ejecutivo" />
                <Member image={team2} name="Dra. Ana Yolanda" charge="Jefe de SMS" />
            </div>
            <p className="mt-8 text-xl font-light text-center">
                Te brindaremos una guía direccional, adaptable a las circunstancias del momento para alcanzar los fines y objetivos de la Empresa. Te brindaremos una guía direccional, adaptable a las circunstancias del momento para alcanzar los fines y objetivos de la Empresa.
            </p>
            <div className="my-16 text-center">
                <button type="button" className="ease primary-button hover-fill-primary">
                    Conócenos
                </button>
            </div>
        </div>
    </section>
);

export default Team;
