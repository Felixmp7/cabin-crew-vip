import React from 'react';
import Image from 'next/image';

interface Props {
    image: StaticImageData,
    name: string,
    charge: string
}

const Member = ({ image, name, charge }: Props): JSX.Element => (
    <div className="flex flex-col items-center">
        <Image src={image} alt={name} width={200} height={200} layout="fixed" />
        <div className="mt-4 text-2xl text-red-900">{name}</div>
        <div className="text-xl">{charge}</div>
    </div>
);

export default Member;
