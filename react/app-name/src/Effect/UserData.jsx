import React, { useEffect ,useState} from 'react'

function UserData() {
const [user,setuser]= useState([])

  useEffect(() => {
    getdata()
  }, [])



  const getdata = () => {
    fetch("https://fakestoreapi.com/users", {
      method: "GET"
    })
      .then((res) => {
        return res.json()
      })
      .then((xyz) => {
        console.log(xyz)
        setuser(xyz)

      })
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">email</th>
            <th scope="col">username</th>
            <th scope="col">zipcode</th>
            <th scope="col">city</th>
          </tr>
        </thead>

        <tbody>
          {
            user && user.map((xyz, index) => {
              return(
              <tr key={index}> 
                <th scope="row">{xyz.id}</th>
                <td>{xyz.email}</td>
                <td>{xyz.username}</td>
                <td>{xyz.address.zipcode}</td>
                <td>{xyz.address.city}</td>

              </tr>
              )
            })
          }

        </tbody>
      </table>


    </div>
  )
}

export default UserData