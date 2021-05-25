import { useParams } from "react-router-dom";
import UseFetch from "../UseFetch";

const CourseDetails = () => {
  const { id } = useParams();
  const { data: details } = UseFetch("http://localhost:8000/courses");

  return (
    <div>
    
      
      <article>
        <h1>{id}</h1>
      </article>
      
    </div>
  );
};

export default CourseDetails;
