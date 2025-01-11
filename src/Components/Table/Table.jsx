import React from "react";

/* Style */
import './Table.css';

const Table = ({ projects=[] }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Title</th> {/* Add Title Column because table was lookin empty */}
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={project?.['s.no']}>
            <td>{project?.['s.no']+1}</td>
            <td>{project?.title}</td> 
            <td>{project?.['percentage.funded']}%</td>
            <td>${project?.['amt.pledged']?.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
