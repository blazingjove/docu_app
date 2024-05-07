import React,{useState} from 'react';

function Container(){

    //code will change text of submit button to "Loading..." for 2 seconds when pressed
    const [buttonText, setButtonText] = useState('Submit');
    const [style, styleHide] = useState("test");

    const handleClick = () => {
        setButtonText('Loading...');
        styleHide('lets go')
        setTimeout(() => {
            setButtonText('Submit');
            styleHide('test');
        }, 2000); // Reverts back to 'Submit' after 2 seconds
    };


    return (
        //post and home page that will change on button press of Home and Submit
        <React.Fragment>
        <div className= "PostPage">
            <iframe src="https://giphy.com/embed/e0OpCojpLrfqYKxfNl" width="480" height="480" frameBorder="1"
                    className="giphy-embed" allowFullScreen></iframe>
            <h2>{style} Click the Button below if the file does not download automatically</h2>
            <button>DOWNLOAD</button>
            <br/><br/>
            <button>Home</button>
        </div>

        <div className= "MainPage">
            <h2>Upload Master Inventory Listing From PMEL Below (.PDF only)</h2>
            <input type="file" accept="application/pdf"/>
            <br/>
            <h2>Upload Inventory from Access below (.XLSX only)</h2>
            <input type="file" accept=".xlsx"/>
            <br/><br/>
            <button type="submit" onClick={handleClick} >{buttonText}</button>
        </div>
        </React.Fragment>
    );
}


//export functions
export default Container;
