import {useEffect} from "react";

const Start = props => {
    useEffect(()=>{
        if (props.startTour) {
            props.startTour.start();
        }
    }, [props.startTour])

    return (null)
}

export default Start;