import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const Statistic=()=> {
  const [stat,setStat]=useState([])

  useEffect(()=> {
    fetchStat()
  },[])

 const fetchStat=async ()=>{
    try {
      const resp=await axios.get('http://localhost:5000/statistic')
      setStat(resp.data)
    }catch(err){
      console.log(err)
    }
  }
    return (
      <>
      <div className="statistic m-5 p-5">
         <h1 className="text-center">Fafajta szerinti statisztika</h1>
         <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Típus</th>
                    <th scope="col">Darab</th>
                  </tr>
                </thead>
                <tbody>
                {stat.map((item, index) => <tr key={index}>
                  <td>{item.faj}</td>
                  <td>{item.darab}</td>
                </tr>)}
                </tbody>
              </table>
          </div>
      </>
    )
}