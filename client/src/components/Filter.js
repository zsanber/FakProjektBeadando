import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const Filter=()=> {
  const [megyek,setMegyek]=useState([])
  const [fak,setFak]=useState([])

  useEffect(()=> {
    fetchMegyek()
  },[])

 const fetchMegyek=async (id)=>{
    try {
      const resp=await axios.get('http://localhost:5000/filter-megye')
      setMegyek(resp.data)
    }catch(err){
      console.log(err)
    }
  }

  const fetchFak=async (id)=>{
    try {
      const resp=await axios.get('http://localhost:5000/filter?id=' + id)
      setFak(resp.data)
    }catch(err){
      console.log(err)
    }
  }

    return (
      <>
      <div className="m-5 p-5">
      <select className="form-control" onChange={(e) => fetchFak(e.target.value)}>
      <option defaultValue>Válasszon megyét</option>
      {megyek.map((item, index) => (
        <option key={index} value={item.id}>
          {item.nev}
        </option>
      ))}
    </select>
      <div className="megye">
         <h1 className="text-center">Fafajta megye szerint</h1>
         <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Faj</th>
                    <th scope="col">Körméret</th>
                    <th scope="col">Település</th>
                  </tr>
                </thead>
                <tbody>
                {fak.map((item, index) => <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.faj}</td>
                  <td>{item.kormeret}</td>
                  <td>{item.telepules}</td>
                </tr>)}
                </tbody>
              </table>
          </div>
      </div>
      
      </>
    )
  }
  