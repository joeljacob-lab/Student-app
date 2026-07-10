import React from "react";
import NavBar from "./NavBar";

const AddStudent = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-4">Add Student</h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Admission Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Class / Grade</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Parent / Guardian Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Contact Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="col-12 text-center mt-3">
                  <button className="btn btn-success px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddStudent;