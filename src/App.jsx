import Header from './Header'
import Footer from './Footer'
import Packages from './Packages'
import React, { useEffect, useState } from 'react';


function App() {
    const [Data, setData] = useState(null); /* Method for setting a value */

    /* Try to set/load data from API and catch errors */
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
          if (!response.ok) {
            throw newError (`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }
  ,[]);
    return(
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">

        <Header/>
        {Data ? (
        <Packages
          packages = {Data} /> ) : (
            <p>Loading data...</p>
          )}
        <Footer/>
      </div>  

    )
}

export default App
