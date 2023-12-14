import React, { useEffect, useState } from "react";
import axiosClient from "../axios";

export default function Refund() {
    let [signal, setSignal] = useState(true);
    let [data, setData] = useState([]);
    useEffect(() => {
        axiosClient
            .get("/refund/request")
            .then((response) => {
                setData(response.data.data);
                //console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [signal]);
    let deleteData = () => {
        
    };
    let accept = (order) => {
        axiosClient
            .post("/refund/request/accept", { order: order })
            .then((response) => {
                axiosClient
            .get("/refund/request")
            .then((response) => {
                setData(response.data.data);
                //console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
            })
            .catch((error) => {
                console.log(error.message);
            });
            
    };
    let content = data.map((el, i) => {
        return (
            <tr key={el.full_name + i}>
                <th scope="row">{i + 1}</th>
                <td>{el.full_name}</td>
                <td>{el.email}</td>
                <td>{el.reason.slice(0, 20)}...</td>
                <td>
                    <button className="btn btn-outline-primary mx-2">
                        Cancle
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            accept(el.order_number);
                        }}
                    >
                        Accept
                    </button>
                </td>
            </tr>
        );
    });
    
    return (
        <>
            <h3 className="text-center">Refund Request</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{content && content}</tbody>
            </table>
        </>
    );
}
