import { useParams, useNavigate } from "react-router-dom";
import projects from "../data.json";
import Teaser from "./teaser";

function TeaserList() {
  const { teaserId } = useParams();      // get id from URL
  const navigate = useNavigate();

  const handleToggle = (id, isOpen) => {
    if (isOpen) {
      navigate("/");          // collapse → back to root
    } else {
      navigate(`/work/${id}`); // expand → change URL
    }
  };

  return (
    <table>
      <tbody>
        {projects.map((item) => (
          <Teaser
            key={item.id}
            id={item.id}
            title={item.title}
            year={item.year}
            media={item.media}
            pics={item.pics}
            desc={item.desc}
            link={item.link}
            isOpen={teaserId === item.id}
            onToggle={handleToggle}   // pass handler directly
          />
        ))}
      </tbody>
    </table>
  );
}

export default TeaserList;
