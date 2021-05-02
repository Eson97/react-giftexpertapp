import React from 'react'



export const GifGridItem = ({title,url}) => {
    
    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img src={url} alt={title}/>
            <p>{title}</p>
            <iframe title="share-button" src={`https://www.facebook.com/plugins/share_button.php?href=${url}&layout=button&size=large&width=103&height=28&appId`} width="103" height="28" style={{border:"none",overflow:"hidden",margin:"10px"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
    )
}
