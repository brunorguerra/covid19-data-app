import { Container } from "./style";
import { AiOutlineGlobal } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Statistics = () => {
    const {
        currentCountry,
        setCurrentCountry,
        listCountries,
        countryData,
        globalData,
        isLoad,
    } = useContext(DataContext);

    return (
        <Container status={isLoad}>
            <div className="header">
                <h3>
                    <AiOutlineGlobal /> Global
                </h3>
            </div>

            <div className="stats-global">
                <div className="stats">
                    <p>Confirmados</p>
                    <p>{globalData.TotalConfirmed}</p>
                </div>
                <div className="stats">
                    <p>Mortes</p>
                    <p>{globalData.TotalDeaths}</p>
                </div>
                <div className="stats">
                    <p>Recuperados</p>
                    <p>{Math.round((globalData.TotalConfirmed * 40) / 100)}</p>
                </div>
            </div>

            <div className="separator"></div>

            <div className="stats-country">
                <div className="header">
                    <p>
                        Casos de Covid 19
                        <br />
                        <span>{currentCountry.split("-").join(" ")}</span>
                    </p>

                    <div className="select-country">
                        <label htmlFor="country">Selecione um País:</label>
                        <select
                            name="country-select"
                            id="country"
                            onChange={(e) => setCurrentCountry(e.target.value)}
                        >
                            <optgroup>
                                {listCountries.map((country, index) => (
                                    <option key={index} value={country.Slug}>
                                        {country.Country}
                                    </option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div className="main">
                    <div className="load">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="card-stats confirmed">
                        <p>Confirmados</p>
                        <p>{countryData.Confirmed}</p>
                    </div>
                    <div className="card-stats recovered">
                        <p>Recuperados</p>
                        <p>{countryData.Active}</p>
                    </div>
                    <div className="card-stats deceased">
                        <p>Mortes</p>
                        <p>{countryData.Deaths}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
