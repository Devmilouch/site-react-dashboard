import { useContext } from "react";
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart";
import "./DashboardFinance.css";
import { DashboardContext } from "../../context/DashboardContext";



const DashboardFinance = (props) => {
    const { dataChart, changeYear, yearData } = useContext(DashboardContext);

    return (
        <div className="global-container">
            <h1>Les résultats de l'année : {yearData}</h1>

            <form>
                <label htmlFor="year">Choisissez une date</label>
                <select defaultValue={yearData} onChange={changeYear} id="year">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </form>

            <div className="dashboard-container">
                <BarChart
                    data={dataChart.chart1}
                    name="Chiffres bimestriels"
                />
                <LineChart
                    data={dataChart.chart2}
                    name="Nombre d'abonnés (en milliers)"
                />
                <LineChart
                    data={dataChart.chart3}
                    name="Nombre de clients (en milliers)"
                />
                <BarChart
                    data={dataChart.chart4}
                    name="Budget marketing"
                />
            </div>
        </div>
    );
};

export default DashboardFinance;