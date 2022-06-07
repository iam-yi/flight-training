import InstructorCard from "./InstructorCard";

export default function Instructor({ instructors }) {
    return(
        <div>
            <h1>About Our Instrucotrs</h1>
            <ul>
                {instructors.map((i, idx) => (
                    <InstructorCard instructor={i} key={idx}/>
                ))}
            </ul>
        </div>
    )
}