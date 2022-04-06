import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../services/Api";

interface DataContextProps {
    children: ReactNode;
}

interface ListCountriesProps {
    Country: string;
    Slug: string;
}

type DataContextType = {
    currentCountry: string;
    setCurrentCountry: (newState: string) => void;
    listCountries: ListCountriesProps[];
    setListCountries: (newState: ListCountriesProps[]) => void;
    countryData: { Active: number; Confirmed: number; Deaths: number };
    setCountryData: (newState: {
        Active: number;
        Confirmed: number;
        Deaths: number;
    }) => void;
    globalData: {
        TotalConfirmed: number;
        TotalDeaths: number;
        TotalRecovered: number;
    };
    setGlobalData: (newState: {
        TotalConfirmed: number;
        TotalDeaths: number;
        TotalRecovered: number;
    }) => void;
    isLoad: boolean;
    setIsLoad: (newState: boolean) => void;
};

const initialValue = {
    currentCountry: "Brazil",
    setCurrentCountry: () => {},
    listCountries: [{ Country: "", Slug: "" }],
    setListCountries: () => [{}],
    countryData: { Active: 0, Confirmed: 0, Deaths: 0 },
    setCountryData: () => {},
    globalData: { TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0 },
    setGlobalData: () => {},
    isLoad: false,
    setIsLoad: () => {},
};

export const DataContext = createContext<DataContextType>(initialValue);

export const DataContextProvider = ({ children }: DataContextProps) => {
    const [currentCountry, setCurrentCountry] = useState(
        initialValue.currentCountry
    );
    const [listCountries, setListCountries] = useState(
        initialValue.listCountries
    );
    const [countryData, setCountryData] = useState(initialValue.countryData);
    const [globalData, setGlobalData] = useState(initialValue.globalData);
    const [isLoad, setIsLoad] = useState(initialValue.isLoad);

    useEffect(() => {
        Api.get("/summary").then((response) =>
            setGlobalData(response.data.Global)
        );
    }, []);

    useEffect(() => {
        Api.get("/countries").then((response) => {
            setListCountries(response.data);
        });
    }, []);

    useEffect(() => {
        setIsLoad(true);
        Api.get(`/country/${currentCountry.toLowerCase()}`)
            .then((response) => {
                setIsLoad(initialValue.isLoad);
                const lastIndex = response.data.length - 1;
                setCountryData(
                    response.data[lastIndex] || initialValue.countryData
                );
            })
            .catch((error) => console.log(`Ocorreu um erro ${error}`));
    }, [currentCountry]);

    return (
        <DataContext.Provider
            value={{
                currentCountry,
                setCurrentCountry,
                listCountries,
                setListCountries,
                countryData,
                setCountryData,
                globalData,
                setGlobalData,
                isLoad,
                setIsLoad,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
