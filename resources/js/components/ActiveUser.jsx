import React from "react";

export default function ActiveUser() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="text-center">Active User</h5>
                <div className="p-4 active-user display-3 text-light bg-secondary rounded-2 mb-2 text-center">
                    900
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Active Pages</th>
                                <th scope="col">User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#">Product</a>
                                </td>
                                <td>345</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">Product</a>
                                </td>
                                <td>345</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">Product</a>
                                </td>
                                <td>345</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">Product</a>
                                </td>
                                <td>345</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">Product</a>
                                </td>
                                <td>345</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
