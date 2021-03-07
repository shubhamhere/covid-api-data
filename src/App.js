import React, { useState, useEffect } from 'react'
import "./App.css";
import CovidSummary from './components/CovidSummary';
import LineGraph from './components/LineGraph';
import axios from './axios'
function App() {
    const [totalConfirmed, settotalConfirmed] = useState(0)
    const [totalRecovered, settotalRecovered] = useState(0)
    const [totalDeaths, settotalDeaths] = useState(0)
    const [loading, setloading] = useState(false)
    const [covidSummary, setcovidSummary] = useState({})
    const [days, setdays] = useState(7)
    const [country, setcountry] = useState('')
    const [coronaCountAr, setcoronaCountAr] = useState([])
    const [label, setlabel] = useState([])
    useEffect(() => {
        setloading(true);

        axios.get('/summary')

            .then(res => {
                setloading(false);

                if (res.status === 200) {
                    settotalConfirmed(res.data.Global.TotalConfirmed)
                    settotalRecovered(res.data.Global.NewRecovered)
                    settotalDeaths(res.data.Global.TotalDeaths)
                    setcovidSummary(res.data)
                }
                console.log(res);
            })
            .catch(error => {
                console.log(error);

            })

    }, []);

    const formatDate = (date) => {
        const d = new Date(date)
        const year = d.getFullYear()
        const month = `0${d.getMonth() + 1}`.slice(-2)
        const _date = d.getDate()
        return `${year}-${month}-${_date}`
    }

    const countryHandler = (e) => {

        setcountry(e.target.value);
        const d = new Date()
        const to = formatDate(d)
        const from = formatDate(d.setDate(d.getDate() - days))
        getCoronaReportByDateRange(e.target.value, from, to)
    }
    const daysHandler = (e) => {
        setdays(e.target.value)
        const d = new Date()
        const to = formatDate(d)
        const from = formatDate(d.setDate(d.getDate() - e.target.value))
        getCoronaReportByDateRange(country, from, to)
    }

    const getCoronaReportByDateRange = (countrySlug, from, to) => {
        axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
            .then(res => {
                console.log(res);
                const yAxisCoronaCount = res.data.map(d => d.Cases)
                const xAxisLabel = res.data.map(d => d.Date)
                const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug)

                setcoronaCountAr(yAxisCoronaCount)

                settotalConfirmed(covidDetails.TotalConfirmed)
                settotalRecovered(covidDetails.TotalRecovered)
                settotalDeaths(covidDetails.TotalDeaths)
                setlabel(xAxisLabel)
            })
            .catch(error => {
                console.log(error);

            })
    }

    if (loading) {
        return <p>Fetching data from api...!</p>
    }
    return (
        <div className="App">
            <CovidSummary
                totalConfirmed={totalConfirmed}
                totalRecovered={totalRecovered}
                totalDeaths={totalDeaths}
                country={country}
            />
            <div className="select">
                <select value={country} onChange={countryHandler} >
                    <option value="">Select Country</option>
                    {
                        covidSummary.Countries && covidSummary.Countries.map(country =>
                            <option key={country.Slug} value={country.Slug}>{country.Country}</option>)
                    }
                </select>
                <select value={days} onChange={daysHandler}>
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 90 days</option>
                </select>
            </div>

            <LineGraph
                yAxis={coronaCountAr}
                label={label} />
        </div>
    )
}

export default App
