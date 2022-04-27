export const loadElementPlusStyle = () => {
    var url = "https://unpkg.com/element-plus@latest/dist/index.css"
    var link=document.createElement("link"); 
    link.setAttribute("rel", "stylesheet"); 
    link.setAttribute("type", "text/css"); 
    link.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(link)
}

export const loadIconStyle = () => {
    var url = "https://at.alicdn.com/t/font_3309563_fr30llblzuv.css"
    var link=document.createElement("link"); 
    link.setAttribute("rel", "stylesheet"); 
    link.setAttribute("type", "text/css"); 
    link.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(link)
}



