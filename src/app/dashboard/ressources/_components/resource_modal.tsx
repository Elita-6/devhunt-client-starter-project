import React from 'react';
import ResourceForm from "@/app/dashboard/ressources/_components/resource_form";
interface Props{
    HandleClick: ()=>void
}
const ResourceModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central" onClick={(e)=>e.stopPropagation()}>
                <ResourceForm HandleClick={props.HandleClick}/>
            </div>
        </div>
    );
};

export default ResourceModal;