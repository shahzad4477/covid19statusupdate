import React, { Component } from "react";
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker//CountryPicker';
// because we have index.js in component we can import like this
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api'
import coronaimg from './images/covid.png'

class App extends Component
{

    state = {
        data: {},
        country: '',
    }


    async componentDidMount()
    {
        const fetchedData = await fetchData();
        // console.log(data)
        this.setState({ data: fetchedData });

    }

    handleCountryChange = async (country) =>
    {// fetch data
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        // console.log(country);
        // set the state
        this.setState({ data: fetchedData, country: country })
    }

    render()
    {
        const { data, country } = this.state;
        return (

            <div className={styles.container}>
                <img className={styles.image} src={coronaimg} alt='Covid19 status' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

            </div>
        );
    }
}

export default App;
