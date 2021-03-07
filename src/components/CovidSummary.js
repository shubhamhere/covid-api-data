import React from 'react'
import Card from './Card';
import Numberformat from "react-number-format";

const CovidSummary = (props) => {

    const{
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;

    return (
        <div>
            <div>
                <h1 style={{textTransform:'capitalize'}}>{country === '' ? 'World Wide Corona Report' : country}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Card>
                        <span>Total Confirmed </span>
                        <span>{
                            <Numberformat 
                             value={totalConfirmed} 
                             displayType={'text'}
                             thousandSeparator={true}
                        />
                        }</span>
                    </Card>
                    <Card>
                        <span>Total Recovered </span>
                        <span>{
                            <Numberformat 
                             value={totalRecovered} 
                             displayType={'text'}
                             thousandSeparator={true}
                        />}</span>
                    </Card>
                    <Card>
                        <span>Total Deaths</span>
                        <span> {
                            <Numberformat 
                             value={totalDeaths} 
                             displayType={'text'}
                             thousandSeparator={true}
                        />
                        }</span>
                    </Card>

                </div>
            </div>
        </div>
    )
}
export default CovidSummary


