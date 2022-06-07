import './InstructorCard.css';

export default function InstructorCard({ instructor }) {
    return(
        <li className="Card">
            <img src={instructor.posterPath}></img>
            <div className="container">
            <h2>{instructor.name}</h2>
            <p>Certificate: {instructor.cetifications}</p>
            <p>Infomation: {instructor.information}</p>
            </div>
        </li>
    )
}