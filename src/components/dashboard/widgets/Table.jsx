import React from "react";
import Chart from "../chart/Chart";

const Table = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-lg-0">
          <div className="card">
            <h5 className="card-header">Latest transactions</h5>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order</th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Total</th>
                      <th scope="col">Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">17371705</th>
                      <td>Volt Premium Bootstrap 5 Dashboard</td>
                      <td>johndoe@gmail.com</td>
                      <td>€61.11</td>
                      <td>Aug 31 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17370540</th>
                      <td>Pixel Pro Premium Bootstrap UI Kit</td>
                      <td>jacob.monroe@company.com</td>
                      <td>$153.11</td>
                      <td>Aug 28 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17371705</th>
                      <td>Volt Premium Bootstrap 5 Dashboard</td>
                      <td>johndoe@gmail.com</td>
                      <td>€61.11</td>
                      <td>Aug 31 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17370540</th>
                      <td>Pixel Pro Premium Bootstrap UI Kit</td>
                      <td>jacob.monroe@company.com</td>
                      <td>$153.11</td>
                      <td>Aug 28 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17371705</th>
                      <td>Volt Premium Bootstrap 5 Dashboard</td>
                      <td>johndoe@gmail.com</td>
                      <td>€61.11</td>
                      <td>Aug 31 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">17370540</th>
                      <td>Pixel Pro Premium Bootstrap UI Kit</td>
                      <td>jacob.monroe@company.com</td>
                      <td>$153.11</td>
                      <td>Aug 28 2020</td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" className="btn btn-block btn-light">
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Table;
