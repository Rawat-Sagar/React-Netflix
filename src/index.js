
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards'
import Sdata from './Sdata'
import './index.css'
import reportWebVitals from './reportWebVitals';


// normal function
// function netflixcard(val)
// {
//     return(
//          <Card 
//         imgsrc={val.imgsrc} 
//         title={val.title} 
//         sname={val.sname} 
//         link={val.link}    
//         />
//     );
// }

ReactDOM.render(
    <>
        <h1 className="heading">List of top 3 Netflix Series</h1>
        {/* {Sdata.map(netflixcard)} */}

        {/* Fat arrow */}
        {Sdata.map((val) =>{
            return(
                <Card 
                imgsrc={val.imgsrc} 
                title={val.title} 
                sname={val.sname} 
                link={val.link}

                />
            );
        })}
    </>,
    document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
