import Help from "./Store.jsx";
import Container from "./Store.jsx";

//todo insert hithub logo for link to repo

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <h2>TMDE File Comparison</h2>
            </header>

            <Container/>

            <br/>
            <footer>
                <div>
                    <h3> click here to see guide on how to use the web application.</h3>
                    <p>Created by TSgt M. Alvarez /<a href="https://github.com/blazingjove/docu_app"> GitHub repo</a>
                    </p>

                </div>
                <h3 id="hidden">Garrett is a big dummy</h3>
            </footer>
        </main>

    )
}

export default App;

