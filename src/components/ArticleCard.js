
import React from "react";

//To ingest JSON, you can pass data from the file into this function, Article card
    //So we can use it

//We'll go over link a bit later
function ArticleCard( {imageAlt, imageSrc, blurb, date, title} ){
    return(
        <div className="articleCard">
            <div className="imageWrapper"> 
                <img src={imageSrc} alt={imageAlt} />
            </div> 
            <div className="textWrapper">
                <h2 className="item header">{title}</h2>
                <p className="item date">{date}</p> 
                <p className="item blurb">{blurb}</p> 
                <div className="item textLink"> 
                    <a href="#">link</a> 
                </div> 
            </div> 
        </div>

    );
}

export default ArticleCard; 