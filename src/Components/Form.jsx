import React, { useState } from "react";
import './Form.css'

const Form = ({ onSubmit }) => {
    const [leagueId, setLeagueId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(leagueId) {
            onSubmit(leagueId);
        }
    }

    return (
        <form className="league-form" onSubmit={handleSubmit}>
            <label>
                <input
                  type="text"
                  value={leagueId}
                  onChange={(e) => setLeagueId(e.target.value)}
                  placeholder="Enter League ID"
                  />
            </label>
        </form>
    );
};

export default Form;