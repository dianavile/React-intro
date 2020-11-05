import React from "react";


// How to access the data- inside the ContactCard- that we are passing down to the Contact part.
//pass in several props instead of hardcoded values.
//This is how you get the individual Contact information for each ContactCard
function ContactCard(props) {
    // console.log(props);
    return (
        <div className="contact-card">
            //pass down a prop, with an object, with a property
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact}</p>
            <p>Email: {props.contact}</p>
        </div>
    )
}

export default ContactCard;