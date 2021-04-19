import React, {useState} from "react"

function Teamform(props){
    const {forms} = props;

    const [member, setMember] = useState({id: Date.now(), name: "", email: "", role: ""})

    const handleChanges = event=> {setMember({...member, [event.target.name]: event.target.value})}

    const handleSubmit =event=> {event.preventDefault();
    console.log(member)}

    return (
        <div> 
            {console.log(member)}
            <form onSubmit={event=> handleSubmit(event)}>
                <label> Name: <input type="text" name="name" value={member.name} onChange={event=> handleChanges(event)}/>
                </label>

                <label> Email:  <input type="email" name="email" value={member.email} onChange={event=> handleChanges(event)}/>
                </label>

                <label>Role: <input type="text" name="role" value={member.role} onChange={event=> handleChanges(event)} /></label> 

                <button> Submit! </button>

            </form>
            </div>
    )
}

export default Teamform