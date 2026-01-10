import { useState } from "react";

function App(){
    const [name , setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();        // stopping browser reload after submit.
        setName("");              // used for empty submits
        console.log("Form submitted!");
    };


    return(
        <div >
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label>Name:</label>
                        <input 
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <button type="submit"  disabled={!name} >Submit</button>    
                </fieldset>
            </form>
        </div>
    );
        
}