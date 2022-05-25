import { createContext, useState } from "react";
import fulldata from "./fulldata";



export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
    const [ dataChart, setDataChart ] = useState(fulldata["2021"]);
    const [ yearData, setYearData ] = useState("2021");

    const changeYear = el => {
        setDataChart(fulldata[el.target.value]);
        setYearData(el.target.value);
    }

    return (
        <DashboardContext.Provider 
            value={{
                changeYear,
                dataChart,
                yearData
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;