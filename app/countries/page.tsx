import Nav from "@/app/components/Nav";
import Link from "next/link";
import React from "react";

const Countries = () => {
    return (
        <div>
            <Nav />
            <div>
                <h1 className="text-center text-3xl bg-purple-300 font-bold">Country List</h1>
                <ul className="text-center">
                    <li><Link href="/countries/pakistan" className="text-2xl font-bold">Pakistan</Link></li>
                    <li><Link href="/countries/australia" className="text-2xl font-bold">Australia</Link></li>
                    <li><Link href="/countries/spain"  className="text-2xl font-bold">Spain</Link></li>
                    <li><Link href="/countries/china"  className="text-2xl font-bold">China</Link></li>
                    <li><Link href="/countries/japan" className="text-2xl font-bold">Japan</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Countries;