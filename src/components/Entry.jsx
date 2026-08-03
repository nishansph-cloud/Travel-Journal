// export default function Entry() {
//     return(
//         <>
//             <article>
//                 <div className="main-container">

//                     <div className="image-container">
                            
//                         <img className="main-image" alt="Mount Fuji" src="/src/assets/MountFuji.jpg"/>
                        
//                     </div>

//                     <div>

//                         <div className="main-container-three">
                                
//                             <img className="marker" alt="marker" src="/src/assets/marker.png"/>
//                             <span className="country-name">JAPAN</span>
//                             <a href="">View on Google Maps</a>
                            
//                         </div>

//                         <h1>Mount Fuji</h1>
//                         <span className="span-date">12 Jan, 2021 - 24 Jan, 2021</span>
//                         <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                        
//                     </div>
                        
//                 </div>
//             </article>
//         </>
//     )
// }



//using props to make it more reusable
// export default function Entry(props) { //you could write whateverYouWant instead of props, props is just more commonly used

//     return(
//         <>
//             <div className="main-container">

//                 <div className="image-container">
                        
//                     <img className="main-image" alt={props.img.alt} src={props.img.src}/>
                    
//                 </div>

//                 <div className="main-container-two">

//                     <div className="main-container-three">
                            
//                         <img className="marker" alt="marker" src="/src/assets/marker.png"/>
//                         <span className="country-name">{props.countryName}</span>
//                         <a target="_blank" href={props.map}>View on Google Maps</a>
                        
//                     </div>

//                     <h1>{props.destination}</h1>
//                     <span className="span-date">{props.date}</span>
//                     <p>{props.about}</p>
                    
//                 </div>
                    
//             </div>
//         </>
//     )
// }


//Same shit different way to write
// export default function Entry({img, countryName, destination, date, about}=props) { //you could write whateverYouWant instead of props, props is just more commonly used

//     return(
//         <>
//             <div className="main-container">

//                 <div className="image-container">
                        
//                     <img className="main-image" alt={props.img.alt} src={props.img.src}/>
                    
//                 </div>

//                 <div>

//                     <div className="main-container-three">
                            
//                         <img className="marker" alt="marker" src="/src/assets/marker.png"/>
//                         <span className="country-name">{countryName}</span>
//                         <a target="_blank" href={props.map}>View on Google Maps</a>
                        
//                     </div>

//                     <h1>{destination}</h1>
//                     <span className="span-date">{date}</span>
//                     <p>{about}</p>
                    
//                 </div>
                    
//             </div>
//         </>
//     )
// }



// export default function Entry(props) { //you could write whateverYouWant instead of props, props is just more commonly used

// // {props.img && <img .../>} → only renders the <img> if props.img is truthy
// // (not undefined/null/empty string/false). If falsy, nothing is rendered.

//     return(
//         <>
//             <div className="main-container">

//                 <div className="image-container">
                        
//                     {props.img && <img className="main-image" alt={props.img.alt} src={props.img.src}/>}
                    
//                 </div>

//                 <div className="main-container-two">

//                     <div className="main-container-three">
                            
//                         <img className="marker" alt="marker" src="/src/assets/marker.png"/>
//                         {props.countryName && <span className="country-name">{props.countryName}</span>}
//                         <a target="_blank" href={props.map}>View on Google Maps</a>
                        
//                     </div>

//                     <h1 style={{display : props.destination ? "block" : "none"}}>{props.destination}</h1>
//                     {props.date && <span className="span-date">{props.date}</span>}
//                     {props.about && <p>{props.about}</p>}
                    
//                 </div>
                    
//             </div>
//         </>
//     )
// }



//finally after making array in App.jsx
export default function Entry(props) { //you could write whateverYouWant instead of props, props is just more commonly used
console.log(props)
    return(
        <>
            <div className="main-container">

                <div className="image-container">
                        
                    <img className="main-image" alt={props.alt} src={props.src}/>
                    
                </div>

                <div className="main-container-two">

                    <div className="main-container-three">
                            
                        <img className="marker" alt="marker" src="/src/assets/marker.png"/>
                        <span className="country-name">{props.countryName}</span>
                        <a target="_blank" href={props.map}>View on Google Maps</a>
                        
                    </div>

                    <h1>{props.destination}</h1>
                    <span className="span-date">{props.date}</span>
                    <p>{props.about}</p>
                    
                </div>
                    
            </div>
        </>
    )
}