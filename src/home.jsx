import React,{useState} from 'react';

function Container(){

    //code will change text of submit button to "Loading..." for 2 seconds when pressed
    const [style, styleHide] = useState('PrePage');
    const [style2, styleShow] = useState('PostPage');

    const handleClick = () => {
        styleHide("PostPage");
        styleShow("PrePage");
        setTimeout(() => {
            styleHide("PrePage");
            styleShow("PostPage");
        }, 30000); // Reverts back to 'Submit' after 30 seconds
    };

    const homeClick = () => {
        styleHide("PrePage");
        styleShow("PostPage");
    }

    return (
        //post and home page that will change on button press of Home and Submit
        <React.Fragment>
        <div className = {style}>
            <iframe src="https://giphy.com/embed/e0OpCojpLrfqYKxfNl" width="480" height="480" className="giphy-embed" allowFullScreen></iframe>
            <h2> Click the Button below if the file does not download automatically</h2>
            <h3> give it a second!</h3>
            <button>DOWNLOAD</button>
            <br/><br/>
            <button onClick={homeClick}>Home</button>
        </div>

        <div className= {style2}>
            <h2>Upload Master Inventory Listing From PMEL Below (.PDF only)</h2>
            <input type="file" accept="application/pdf"/>
            <br/>
            <h2>Upload Inventory from Access below (.XLSX only)</h2>
            <input type="file" accept=".xlsx"/>
            <br/><br/>
            <button type="submit" onClick={handleClick} >Submit</button>
        </div>
        </React.Fragment>
    );
}


//export functions
export default Container;
