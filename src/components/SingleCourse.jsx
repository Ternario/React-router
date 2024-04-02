import courses from "./../data/courses";
import { Link, useParams, useNavigate } from "react-router-dom";
// import NotFound from "./NotFound";
import { useEffect } from "react";

function SingleCours() {
    const params = useParams();
    const navigate = useNavigate();

    const course = courses.find(({ slug }) => slug === params.slug);

    // if (!course) {
    //     navigate("..", { relative: "path" });
    // }

    useEffect(() => {
        if (!course) {
            navigate("..", { relative: "path" });
        }
    }, [course, navigate]);

    // if (!course) {
    //     return <NotFound />;
    // }

    return (
        <>
            <h1>Single Cours Info</h1>
            <h2>{course?.title}</h2>
            <h3>{course?.slug}</h3>
            <Link to=".." relative="path">
                All courses
            </Link>
        </>
    );
}

export default SingleCours;
