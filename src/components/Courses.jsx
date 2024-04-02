import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "./../data/courses";
import { useEffect, useState } from "react";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return sortedCourses;
}

function Courses() {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey));

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate(".");
            setSortKey();
        }
    }, [sortKey, navigate]);

    const coursesList = sortedCourses.map(({ title, slug, id }) => {
        return (
            <div key={id}>
                <Link to={slug} className="courseLink">
                    {title}
                </Link>
            </div>
        );
    });

    return (
        <>
            <h1>{sortKey ? `Courses sorted bey ${sortKey}` : "Courses"}</h1>
            {coursesList}
        </>
    );
}

export default Courses;
