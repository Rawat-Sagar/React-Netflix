import React from 'react';

function App() {
    // React Challenge
let cDate = new Date();
cDate = cDate.getHours();
let greetings = ' ';
const cssStyle = { };
if(cDate >=1 && cDate<12)
{
    greetings = 'Good Morning';
    cssStyle.color = 'green';
}
else if (cDate>=12 && cDate <16)
{
    greetings = 'Good Afternoon' ; 
    cssStyle.color = 'orange';
}
else if(cDate >=17 && cDate<19)
{
    greetings = 'Good Evening';
    cssStyle.color = 'blue';
}
else{
    greetings = 'Good Night';
    cssStyle.color = 'black';
}

return(
    <>
    <div>
    <h1>Hello Sir , <span style={cssStyle}>{greetings}</span></h1>
    </div>
    </>
);
}

export default App;