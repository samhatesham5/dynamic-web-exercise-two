//--Displays an individual article--

//Anytime you wanna use react, import React
import React from "react";

function Article(){
    return (
        <main> 
            <section className="headerSection"> 
                <div className="headerText"> 
                    <h1>Article Title</h1>
                    <p>date</p>
                    <p className="headerBlurb">desc</p>
                </div> 
            </section>
            <section className="articleBody">
                <p>Some text 1</p>
                <h2>Header Two</h2>
                <p>Some text 2</p>
                <h3>Header 3</h3> 
                <p>Some text 3</p>
            </section> 
        </main>
    ); 
};

export default Article; 
