import React from "react";
import CountryDetailCard from "@/app/components/CountryDetailCard/card";
import { CountryDetails } from "@/types/type";

const CountryName = ({ params }: { params: { country_name: string } }) => {
    console.log(params); // Debugging line

    const countrydetails: CountryDetails[] = [
        {
            name: "Pakistan",
            population: 28810534,
            capital: "Islamabad",
        },
        {
            name: "Australia",
            population: 23456667,
            capital: "Canberra",
        },
        {
            name: "Spain",
            population: 2345897,
            capital: "Madrid",
        },
        {
            name: "China",
            population: 23454637,
            capital: "Beijing",
        },
        {
            name: "Japan",
            population: 23450957,
            capital: "Tokyo",
        },
    ];

    const country = countrydetails.find(
        (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );

    if (!country) {
        return <h1 className="text-center text-3xl font-bold">Country Not Found</h1>;
    }

    console.log(country); // Debugging to check if country is found

    return (
        <div className="text-center text-3xl font-bold">
            <CountryDetailCard
                name={country.name}
                population={country.population}
                capital={country.capital}
            />
        </div>
    );
};

export default CountryName;
