import React, { useEffect, useState } from 'react'

function VariQue() {

    const [user, setuser] = useState([])

    useEffect(() => {
        data()
    }, [])
    function data() {
        fetch("https://dummyjson.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res);
                setuser(res.users)

            })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data) => {
                            console.log(data);
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default VariQue