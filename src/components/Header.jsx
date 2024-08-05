import React, { useContext, useEffect, useState } from 'react';
import { CountryData } from '../CountryData';
import GlobalContext from '../context/Global';

const Header = () => {
    let [btn, setBtn] = useState("light");
    let { setCountry, HandleThemeSwitch } = useContext(GlobalContext);
    let [selectedCountry, setSelectedCountry] = useState(localStorage.getItem('selectedCountry') || 'IN');

    useEffect(() => {
        setCountry(selectedCountry);
    }, [selectedCountry, setCountry]);

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        localStorage.setItem('selectedCountry', country);
        setCountry(country);
    };

    return (
        <div className='h-[80px] w-full dark:shadow-lg dark:bg-white bg-zinc-800 flex items-center justify-around'>
            <div>
                <h1 className='text-3xl mx-10 text-white dark:text-black font-extrabold'>Country<span className='text-red-600'>Currents</span></h1>
            </div>
            <div>
                <select
                    name="countries"
                    value={selectedCountry}
                    className='h-8 mx-10 border-2 w-1/2 border-zinc-700 border-solid px-2 rounded-md bg-transparent dark:text-black text-white font-bold'
                    onChange={handleCountryChange}
                >
                    {
                        CountryData.countries.map((obj, index) => {
                            return (
                                <option className='text-black' key={index} value={obj.code}>{obj.code} - {obj.name.toLocaleUpperCase()}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <button
                    className='w-[40px] mx-10 text-lg h-[40px] rounded-full text-white bg-zinc-700 dark:bg-zinc-300 flex items-center justify-center'
                    onClick={
                        () => {
                            setBtn(btn === "light" ? "dark" : "light")
                            HandleThemeSwitch()
                        }

                    }
                >
                    {
                        btn === "light" ? <img src="/images/sun.png" className=' h-7 w-7' alt="Sun Image" /> : <img className=' h-7 w-7' src="/images/moon.png" alt="Moon Image" />
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;
