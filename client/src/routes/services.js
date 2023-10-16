import "./services.css"
import calendar from "./appointments"
export default function Services() {
    return (
        <>
            <div className="card">
                <h1>Free Inital Consultation</h1>
                <p className="price">$0</p>
                <ul>
                    <li>
                        Discovery Call
                    </li>
                    <li>
                        Zoom Venue
                    </li>
                    <li>
                        60 minutes
                    </li>
                    <li>
                        Easy Online Booking
                    </li>
                </ul>
                <a href={calendar}><button>Book Now</button></a>
                {/* <a href="/login"><button>Book now</button></a> */}
            </div>
            <div className="card">
                <h1>New Agent Plan</h1>
                <p className="price">$149/month</p>
                <ul>
                    <li>
                        90-day Plan
                    </li>
                    <li>
                        Bi-weekly Coaching
                    </li>
                    <li>
                        Free Scripts
                    </li>
                    <li>
                        Free Buyer & Seller Presentations
                    </li>
                </ul>
                <a href="/login"><button>Book now</button></a>
            </div>
            <div className="card">
                <h1>Monthly Accountability Plan</h1>
                <p className="price">$399/month</p>
                <ul>
                    <li>
                        Bi-weekly Coaching
                    </li>
                    <li>
                        Financial Plan
                    </li>
                    <li>
                        Marketing Plan
                    </li>
                    <li>
                        Business Growth Plan
                    </li>
                    <li>
                        Increase Revenue Plan
                    </li>
                </ul>
                <p><button>Book now</button></p>
            </div>
            <div className="card">
                <h1>Increase Revenue Plan</h1>
                <p className="price">$499/month</p>

                <ul>
                    <li>
                        Team Planning
                    </li>
                    <li>
                        Bi-weekly Coaching
                    </li>
                    <li>
                        Team Coaching
                    </li>
                    <li>
                        Administrative Structuring & Planning
                    </li>
                    <li>
                        Financial & Marketing Plan
                    </li>
                </ul>

                <p><button>Book now</button></p>
            </div>
        </>
    )
}