import React, { useState } from "react";

const Form = ({ onSubmit }) => {
    const [leagueId, setLeagueId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(leagueId) {
            onSubmit(leagueId);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter League ID:
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