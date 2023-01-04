import React, {useState, useEffect} from "react";

const Overview = props => (
    <ul>
        Overview
        <li>Kills {props.summary.kills}</li> 
        <li>Headshots {props.breakdowns.headshots}</li>
    </ul>
)


export default function OverviewChart() {
    const [summary, setSummary] = useState([]);
    const [breakdowns, setBreakdowns]=useState([]);

    useEffect(() => {
        const getStats = async () => {
            await fetch(`http://localhost:3001/`)
            .then(response=>response.json())
            .then(result=>{
                const setAll = (res) => {
                setSummary(res[0].records.pvp.core.summary);
                setBreakdowns(res[0].records.pvp.core.breakdowns.kills);
                }
            setAll(result);
            })
        }
        getStats();
        return;
    }, []);

    return(
        <Overview summary={summary} breakdowns={breakdowns}/>
    )
}