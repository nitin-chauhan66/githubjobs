import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from "./components/useFetch"
import Spinner from "react-bootstrap/Spinner";
import Jobs from './components/Jobs';
import JobsPagination from "./components/pagination"
import SearchForm from './components/SearchForm';
function App() {
  document.title = "Github Jobs"
  const [params,setParams] = useState({});
  const [page,setPage] = useState(1);
  const {jobs,loading,error,hasNextPage} = useFetch(params,page);

  function handleParamsChange(e){
    const param = e.target.name
    const value = e.target.value
    console.log(e.target);
    setPage(1)
    setParams(prevParams=>{
      return {...prevParams,[param]:value}
    })
  }
  return (
    <div className="container my-4">
      <h1 className="mb-4">Github Jobs</h1>
      <SearchForm params={params} onChangeHandler={handleParamsChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {error?(<div>Error</div>):loading?(
        <div className="text-center">
          <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
      ):(
        jobs.map(job=>{
          return <Jobs job={job} key = {job.id}/>
        })
      )}
     
    </div>
  );
}

export default App;
