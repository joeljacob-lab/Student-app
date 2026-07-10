import React from "react";
import { Link } from "react-router-dom";

function ViewAll() {
  const students = [
    {
      name: "John Doe",
      admission: "ADM001",
      class: "S3 MCA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    // {
    //   name: "Jane Smith",
    //   admission: "ADM002",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    // },
    // {
    //   name: "Alex Jones",
    //   admission: "ADM003",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    // },
    // {
    //   name: "Emily Brown",
    //   admission: "ADM004",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    // },
    // {
    //   name: "Michael Clark",
    //   admission: "ADM005",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    // },
    // {
    //   name: "Sarah Davis",
    //   admission: "ADM006",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    // },
    // {
    //   name: "David Wilson",
    //   admission: "ADM007",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    // },
    // {
    //   name: "Jessica Taylor",
    //   admission: "ADM008",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    // },
    // {
    //   name: "James Martinez",
    //   admission: "ADM009",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    // },
    // {
    //   name: "Emma Anderson",
    //   admission: "ADM010",
    //   class: "S3 MCA",
    //   avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    // },
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/add">
            Student Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  Delete
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/viewall">
                  View All
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center mb-4">All Students</h2>


        <div className="row g-4">
          {students.map((student, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <div
                  className="d-flex justify-content-center align-items-center bg-light border-bottom p-3"
                  style={{ height: "180px" }}
                >
                  <img
                    src={student.avatar}
                    alt={`${student.name}'s avatar`}
                    className="rounded-circle border img-fluid"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "cover",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title">{student.name}</h5>

                  <p className="card-text mb-1">
                    <strong>Admission No:</strong> {student.admission}
                  </p>

                  <p className="card-text">
                    <strong>Class:</strong> {student.class}
                  </p>

                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
