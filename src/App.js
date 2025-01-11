import React, { useEffect, useState } from "react";

/* Components */
import Table from "./Components/Table/Table";
import Pagination from "./Components/Pagination/Pagination";

/* Style */
import './App.css'


const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);

  // Calling API to get data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // calculation for pagination(logic)
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // funcrtion to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 >SaaS Labs - Kickstarter Projects </h1>
      <Table projects={currentProjects} />
      <Pagination
        totalProjects={projects.length}
        projectsPerPage={projectsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
