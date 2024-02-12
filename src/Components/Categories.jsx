export default function Categories(){

    const data = [
        {
            id:1,
            name:"Electronics",
            image:"https://image.hurimg.com/i/hurriyet/75/750x422/6514811d4e3fe02cb8a6393c.jpg"
        },
        {
            id:2,
            name:"Clothes",
            image:"https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI"
        },
        {
            id:3,
            name:"Shoes",
            image:"https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg"
        },
        {
            id:4,
            name:"Accessories",
            image:"https://revenuesandprofits.com/wp-content/uploads/2023/11/Mens-Accessories.jpg"
        },
        {
            id:1,
            name:"Jewellery",
            image:"https://storage.googleapis.com/stateless-www-lindajewellers-c/2021/06/8b561163-b7c71645491836436408653570322d1a-scaled-e1624428757260.jpg"
        },
        {
            id:2,
            name:"Cosmetics",
            image:"https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5b0be03cefcc8.jpg"
        },
        {
            id:3,
            name:"Cleaning",
            image:"https://cdn.cleanspot.ca/wp-content/uploads/2021/11/Cleaning-Equipments.jpg"
        },
        {
            id:4,
            name:"Supermarket",
            image:"https://peakbusinessvaluation.com/wp-content/uploads/how-to-value-a-grocery-store-or-supermarket-scaled.webp"
        }
    ]

    return(
        <div className="container">
        <div className="container flex flex-wrap mt-10 mb-10 -mx-4">
        {data.map((datas, index) => (
            <div className="px-8  mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={index}>
                <div className="bg-zinc-50 cursor-pointer flex flex-col justify-center items-center w-64 h-72 rounded-3xl border-4 hover:border-orange-400 hover:shadow-xl duration-300 shadow-md">
                    <p className="text-2xl font-semibold uppercase mb-3">{datas.name}</p>
                    <img className="w-52 h-48 rounded-2xl" src={datas.image} alt="" />
                </div>
            </div>
        ))}
    </div>
    </div>
    )
}