import React, { useContext } from 'react';
import DataContext from '../../utils/DataContext';

export default function Texts() {
    const context = useContext(DataContext);
    console.log('context',context);
    return(
        <div>
            <p>Hello</p>
        </div>
    )   
}