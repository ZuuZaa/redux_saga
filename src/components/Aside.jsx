import { useSelector } from "react-redux";


const Aside = () => {
    const usersData = useSelector(store => store)
    {console.log("first", usersData);}
    return(
        <div>
            aside
        </div>
    )
}
 export default Aside;