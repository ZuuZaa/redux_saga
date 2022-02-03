import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/usersAction";



const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return(
        <div>
            main
        </div>
    )
}
 export default Main;