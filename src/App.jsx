
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
                <h2>Upload Inventory from Access below (.CSV only)</h2>
                <input type="file" accept=".text/csv"/>
            </div>

            <br/><br/>

            <input type="submit" value="Submit"/>


            <br/><br/>

            <div>
                <h3> click here to see guide on how to use the program.</h3>
            </div>
            <footer>
                created by TSgt Marco Alvarez <a href="https://github.com/blazingjove"> GitHub</a>
            </footer>
        </main>

    )
}

export default App;

