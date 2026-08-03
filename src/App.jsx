// import Header from "/src/components/Header.jsx"
// import Entry from "/src/components/Entry.jsx"

// export default function App() {
//     return(
//         <>
//             <Header />
//             <Entry />
//         </>
//     )
// }



// Props (Reusable Components)

// export default function App() {
//     const firstName = "Nishan"
//     const lastName = "Subedi"

//     return(
//         <h1>Hello {firstName} {lastName}</h1>
//     )
// }
// root.render(<App />)



// export default function App() {
//     const hours = new Date().getHours()
//     let timeOfDay

//     if(hours < 12){
//         timeOfDay = "Morning"
//     }else if(hours >=12 && hours < 17){
//         timeOfDay = "Afternoon"
//     }else if(hours < 21){
//         timeOfDay = "Evening"
//     }else{
//         timeOfDay = "Night"
//     }

//     return(
//         <h1>Good {timeOfDay}</h1>
//     )
// }
// root.render(<App />)




//Using Props (Reusable Components)

// import Header from "/src/components/Header.jsx"
// import Entry from "/src/components/Entry.jsx"
// import MountFuji from "/src/assets/MountFuji.jpg"
// import SydenOperaHouse from "/src/assets/OperaHouse.jpg"
// import Geirangerfjord from "/src/assets/Geirangerfjord.jpg"

// export default function App() {
//     return(
//         <>
//             <Header />
//             <article>
//                 <Entry 
//                     img = {{
//                         src: MountFuji,
//                         alt: "MountFuji"
//                     }}
//                     countryName = "JAPAN"
//                     map = "https://www.google.com/maps/search/Mount+Fuji"
//                     destination = "Mount Fuji"
//                     date = "12 Jan, 2021 - 24 Jan, 2021"
//                     about = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//                 />
//                 <Entry 
//                     img = {{
//                         src: SydenOperaHouse,
//                         alt: "SydenOperaHouse"
//                     }}
//                     countryName = "AUSTRALIA"
//                     map = "https://www.google.com/maps/search/Sydney+Opera+House"
//                     destination = "Syden Opera House"
//                     date = "27 May, 2021 - 8 Jun, 2021"
//                     about = "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
//                 />
//                 <Entry 
//                     img = {{
//                         src: Geirangerfjord,
//                         alt: "Geirangerfjord"
//                     }}
//                     countryName = "NORWAY"
//                     map = "https://www.google.com/maps/search/Geirangerfjord"
//                     destination = "Geirangerfjord"
//                     date = "01 Oct, 2021 - 18 Nov, 2021"
//                     about = "The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
//                 />
//             </article>
//         </>
//     )
// }



// import Header from "/src/components/Header.jsx"
// import Entry from "/src/components/Entry.jsx"

// import MountFuji from "/src/assets/MountFuji.jpg"
// import SydenOperaHouse from "/src/assets/OperaHouse.jpg"
// import Geirangerfjord from "/src/assets/Geirangerfjord.jpg"

// const trips = [
//     {id : "1", src: MountFuji, alt : "MountFuji", countryName : "JAPAN", 
//     map : "https://www.google.com/maps/search/Mount+Fuji", destination : "Mount Fuji", date : "12 Jan, 2021 - 24 Jan, 2021",
//     about : "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//     },

//     {id : "2", src : SydenOperaHouse, alt : "SydenOperaHouse", countryName : "AUSTRALIA", 
//     map : "https://www.google.com/maps/search/Sydney+Opera+House", destination : "Syden Opera House", date : "27 May, 2021 - 8 Jun, 2021",
//     about : "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
//     },

//     {id : "3", src : Geirangerfjord, alt: "Geirangerfjord", countryName : "NORWAY",  map : "https://www.google.com/maps/search/Geirangerfjord",
//     destination : "Geirangerfjord", date : "01 Oct, 2021 - 18 Nov, 2021",
//     about : "The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
//     }
// ]

// export default function App() {
//     return(
//         <>
//             <Header />
//             {trips.map((trip) => <Entry key={trip.id} {...trip} />)}
//         </>
//     )
// }



//After creating TripsData.jsx

import Header from "/src/components/Header.jsx"
import Entry from "/src/components/Entry.jsx"
import trips from "/src/components/TripsData.jsx"

export default function App() {

    return(
        <>
            <Header />
            {trips.map((trip) => <Entry key={trip.id} {...trip} />)}
        </>
    )
}
