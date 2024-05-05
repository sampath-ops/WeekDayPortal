import JobResults from "../components/JobResults.js/JobResults";
import JobFilter from "../components/JobFilter.js/JobFilter";
const SearchPortal = () => {
    return (
        <div>
           <JobFilter/>
            <JobResults/>
        </div>
    );
}

export default SearchPortal;