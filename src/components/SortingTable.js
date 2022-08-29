import React, {useState, useCallback} from 'react'
import DummyData from '../DummyData.json'

const SortingTable = () => {
    const [data, setData] = useState(DummyData)
    const [order, setOrder] = useState("asc")
    const [search, setSearch] = useState("")
    console.log(data)

    const sortingMemo = useCallback (function sorting (column) {
        if (order === "asc") {
            const sorted = [...data].sort((a,b) => 
                    a[column] > b[column] ? 1 : -1
                )

                setData(sorted)
                setOrder("dsc")
        }

        if (order === "dsc") {
            const sorted = [...data].sort((a,b) => 
                    a[column] < b[column] ? 1 : -1
                )

                setData(sorted)
                setOrder("asc")
        }
        
    }, [order])

    console.log("usecallback", sortingMemo)

    //  const sorting = (column) => {
    //     if (order === "asc") {
    //         const sorted = [...data].sort((a,b) => 
    //                 a[column] > b[column] ? 1 : -1
    //             )

    //             setData(sorted)
    //             setOrder("dsc")
    //     }

    //     if (order === "dsc") {
    //         const sorted = [...data].sort((a,b) => 
    //                 a[column] < b[column] ? 1 : -1
    //             )

    //             setData(sorted)
    //             setOrder("asc")
    //     }
        
    // }

  return (
    <div>
        <input
         type="text"
         placeholder='search...'
         className='form-controm'
         style={{marginTop:40, marginBottom:20, width:"50%" }}
         onChange={(e) => {setSearch(e.target.value)}}
         />
        <table class="table">
            <thead>
                <th onClick={() => sortingMemo("first_name")}>First Name</th>
                <th onClick={() => sortingMemo("last_name")}>Last Name</th>
                <th onClick={() => sortingMemo("email")}>Email</th>
                <th onClick={() => sortingMemo("gender")}>Gender</th>
            </thead>
            <tbody>
                {data.filter(value => {
                    if (search.length === 0){
                        return value;
                    }else if (
                        value.first_name.includes(search)||
                        value.last_name.includes(search)||
                        value.email.includes(search)
                    ){
                        return value;
                    }
                }).map((item,index) => (
                    <tr key={index}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SortingTable