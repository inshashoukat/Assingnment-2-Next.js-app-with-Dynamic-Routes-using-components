import Link from 'next/link';
import React from 'react';

type Props = {
    name: string;
    population: number;
    capital: string;
}

const CountryDetailCard = ({ name, population, capital }: Props) => {
    return (
        <div>
            <h2><strong>Name</strong> : {name}</h2>
            <div><strong>Capital</strong>: {capital}</div>
            <div><strong>Population</strong>: {population}</div>
            <button>
                <Link href="/countries" className='text-center bg-purple-400'>Back to Country List</Link>{""}
            </button>
        </div>
    );
}

export default CountryDetailCard;
