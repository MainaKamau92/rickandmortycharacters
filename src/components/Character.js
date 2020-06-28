import React from 'react';
import {ExclamationCircle, GeoAlt} from 'react-bootstrap-icons';

const Character = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body p-2">
                    <h5 className="card-title text-center pt-3">{props.name}</h5>
                </div>
            <div className="p-0">
                <ul className="list-group list-group-flush">
                        <li className="list-group-item pl-1"></li>
                        <li className="list-group-item pl-1">
                            Status
                            {
                                props.status === 'Alive' ? <ExclamationCircle color="blue" className="pl-1" size={15} /> :
                                    <ExclamationCircle className="pl-1" color="red" size={15}/>
                            }
                        </li>
                        <li className="list-group-item pl-1">
                            {props.location.name}
                            <GeoAlt color="green" size={15} className="pl-1" />
                        </li>
                    </ul>
            </div>
        </div>
    )
}
export default Character;