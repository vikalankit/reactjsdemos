import React from 'react';

function NumberList(){
    const arr = [1,2,3,4,5];
    const mappedArray = arr.map((number) => {return number;});
    return(
        <div>{mappedArray}</div>
    );
}

export default NumberList;