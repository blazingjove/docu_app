import React from 'react';

function Post() {
    return(
        <React.Fragment>
            <iframe src="https://giphy.com/embed/e0OpCojpLrfqYKxfNl" width="480" height="480" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
            <h2>Click the Button below if the file does not download automatically</h2>
            <button>DOWNLOAD</button>
            <br/><br/>
            <button>Home</button>
        </React.Fragment>

    )
}

export default Post;