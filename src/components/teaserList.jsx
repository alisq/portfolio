import { useState } from "react";
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

    const [mediaFilter, setMediaFilter] = useState(""); // "" means no filter

  // Get all unique media types
  const allMedia = Array.from(
    new Set(projects.flatMap((item) => item.media))
  );

  // Filter data based on selected media type
  const filteredData = mediaFilter
    ? projects.filter((item) => item.media.includes(mediaFilter))
    : projects;

    return (
    <div>
      <div className="filterContainer">
      <label>
        Filter by media:{" "}
        <select
          value={mediaFilter}
          onChange={(e) => setMediaFilter(e.target.value)}
        >
          <option value="">All</option>
          {allMedia.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      </div>
      <table>
        <tbody>
          {filteredData.map((item) => (
            <Teaser key={item.id} {...item} isOpen={teaserId === item.id} onToggle={handleToggle}    />
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default TeaserList;
