import React, { useEffect, useState } from 'react'
import GlobalContext from './Global';


const GlobalContextProvider = ({ children }) => {
    let [theme, setTheme] = useState("light");
    let [newsData, setNewsData] = useState([])
    let [country, setCountry] = useState("IN");
    async function FetchNews(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Check for API-specific error
            if (data.status === "error") {
                const errorCode = data.results.code;
                switch (errorCode) {
                    case "UnsupportedFilter":
                        console.error(`Error: ${data.results.message}`);
                        alert(`Invalid country code: ${data.results.invalid_country}. Please provide a valid country code.`);
                        break;
                    default:
                        console.error(`Unknown error: ${data.results.message}`);
                        alert("An unknown error occurred. Please try again later.");
                }
            } else if (Array.isArray(data.results)) {
                setNewsData(data.results);
            } else {
                console.error("Unexpected data format:", data);
                alert("Unexpected data format received. Please try again later.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert(`An error occurred: ${error.message}. Please try again later.`);
        }
    }
    useEffect(() => {
        FetchNews(`https://newsdata.io/api/1/latest?apikey=pub_498887a82cc4403436bd11d3090f827da2127&country=${country}&language=en`);
    }, [country])
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const HandleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <GlobalContext.Provider value={
            {
                newsData,
                setCountry,
                HandleThemeSwitch
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider