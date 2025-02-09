import './StatSec.css'
import brand from '../../assets/images/icon-brand-recognition.svg'
import detailed from '../../assets/images/icon-detailed-records.svg'
import customizable from '../../assets/images/icon-fully-customizable.svg'


function StatSec() {
    return (
        <section className="section contain">
            <div className="title">
                <h2>
                    Advanced Statistics
                </h2>
                <p>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={brand} alt="brand-recognition" />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="card">
                    <img src={detailed} alt="detailed-records" />
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                </div>
                <div className="card">
                    <img src={customizable} alt="fully-customizable" />
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                </div>
                <hr />
            </div>
        </section>
    )
}

export default StatSec