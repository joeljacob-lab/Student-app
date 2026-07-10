import React from "react";
import NavBar from "./NavBar";

function DeleteStudent() {
  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="text-center mb-4">Delete Student</h3>

                <div className="mb-3">
                  <label className="form-label">Admission Number</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="text-center">
                  <button className="btn btn-warning px-4">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DeleteStudent;