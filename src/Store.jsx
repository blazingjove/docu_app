import React from 'react';

function Container(){
    return (<div className="app-container">
            <h2>Upload Master Inventory Listing From PMEL Below (.PDF only)</h2>
            <input type="file" accept="application/pdf"/>
            <br/>
            <h2>Upload Inventory from Access below (.XLSX only)</h2>
            <input type="file" accept=".xlsx"/>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </div>
    );
}

//export functions
export default Container;
