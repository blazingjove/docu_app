import GitLink from "./Store.jsx";

//todo insert hithub logo for link to repo

function App() {
    return (
        <main>
            <header>
                <h2>TMDE File Comparison</h2>
            </header>

            <div>
                <h2>Upload Master Inventory Listing From PMEL Below (.PDF only)</h2>
                <input type="file" accept="application/pdf"/>
            </div>
                <br/>
            <div>
                <h2>Upload Inventory from Access below (.XLSX only)</h2>
                <input type="file" accept=".xlsx"/>
            </div>

            <br/><br/>

            <input type="submit" value="Submit"/>

            <br/><br/>

            <div>
                <h3> click here to see guide on how to use the web application.</h3>
            </div>
            <footer>
                <div>Created by TSgt M. Alvarez /<GitLink/></div>
                <h3 id = "hidden">Garrett is a big dummy</h3>
            </footer>
        </main>

    )
}

export default App;

