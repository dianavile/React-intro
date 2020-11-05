import React from "react";


// How to access the data- inside the ContactCard- that we are passing down to the Contact part.
//pass in several props instead of hardcoded values.
//This is how you get the individual Contact information for each ContactCard
function ContactCard(props) {
    // console.log(props);
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard;