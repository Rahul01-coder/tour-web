import Card from "./Card"

export default function Tour({tours,removeTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour) =>{
                        return <Card {...tour} key={tour.id} removeTour = {removeTour}/>
                    })
                }
            </div>
        </div>
    )
}