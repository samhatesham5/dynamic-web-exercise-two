//--Displays an individual article--

//Anytime you wanna use react, import React
import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from "../components/data.js";

function Article(){

        
    //Basically takes this dynamic id (one that changes each time we iterate)
    //Turns the name of the value from the key "id"
    //So if the key = {id} and the value = "article-one", this allows us to see "article-one"
    
    //We can basically create dyanmic variable (id) that changes based on the URL name
    const {id} = useParams(); 
    //Now we've gotta find the data we want and pull it out
    const articleData = Data.find((article) => 
        article.id === id);
    
          //useMemo takes two arguments (an arrow function and an array)
    const date = useMemo(() => {
        if (!articleData) return "";
        const parsedDate = new Date(articleData.publishedDate)
        return parsedDate.toDateString();}, [articleData]);

    return (
        <main> 
            <section 
                className="headerSection"
                style= {{
                backgroundImage: `url('${articleData.image.url}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}> 
                <div className="headerText"> 
                    <h1>{articleData.title}</h1>
                    {/*Formatting the date (so it looks nicer) */}
                    <p>{date}</p>
                    <p className="headerBlurb">{articleData.blurb}</p>
                </div> 
            </section>
            {/*Figure out how to get this to work*/}
            <section className="articleBody">
                {/* text is a parameter representing the object, assigned as text*/ }
                {articleData.articleText.map((text, i) => {
                    //Renaming type (inside of articleText to text.type) so we can use it easier
                    const type = text.type;
                    //Everytime you iterate and you see that case = p in the data, return a statement
                    switch(type) {
                        case "p":
                            //React expects that you give dynamic data an id 
                            //i is the index number (so that'll change)
                            return <p key={i}>{text.data}</p>;
                        case "h1":
                            return <h1 key={i}>{text.data}</h1>;
                        case "h2":
                            return <h2 key={i}>{text.data}</h2>;
                        case "h3":
                            return <h3 key={i}>{text.data}</h3>;
                        case "h4":
                            return <h4 key={i}>{text.data}</h4>;
                        default: 
                            return <p key={i}>{text.data}</p>;
                    }
                })}
            </section> 
        </main>
    ); 
};

export default Article; 
