import React, { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import images from './images/img1.svg';
import image from './images/img2.svg';
import './covid.css';
const Covid = () => {
    const [Sdata, setDistricts] = React.useState([]);
    
    const getData = async()=>{
        const Data = await fetch("https://api.covidtracking.com/v1/us/daily.json");
        const res = await Data.json();
        setDistricts(res); 
        console.log(res);
    }
    useEffect(()=>{
        getData();
    },[]);

  
  return (
    <> 
       
        <div className='main-header'>
        <img  src="https://www.cowin.gov.in/assets/images/new-logo.svg" alt="Co-WIN" class="logo2" title="Co-WIN" />
        <h1 style={{textAlign:"center"}}>COVID-19 DATA TABLE FOR INDIA</h1>
        </div>
        <img src={images} alt="medicine" className='img1'/>
        <img src={image} alt="doctor" className='img2' />
        <div className='main-div'>
            <table  style={{textAlign:"center"}}>
            <thead>
                        <tr className='TheadColor'>
                        <th>Dates</th>
                        <th>State</th>
                        <th className='red'>Positive</th>
                        <th className='green'>Negative</th>
                        <th className='orange'>Pending</th>
                        <th>LastModified</th>
                        <th>Total</th>
                        </tr>
            </thead>

            <tbody>
                {
                        Sdata.map((val, index)=>{
                        return (
                    <tr className="TbodyColor" key={index}>
                        <td>{val.date}</td>
                        <td>{val.states}</td>
                        <td className='red'>{val.positive}</td>
                        <td className='green'>{val.negative}</td>
                        <td className='orange'>{val.pending}</td>
                        <td>{val.lastModified}</td>
                        <td>{val.total}</td>
                    </tr>
                    )                          
                 })
                }
            </tbody>
            </table>
        </div>
    </>
  )
}

export default Covid;