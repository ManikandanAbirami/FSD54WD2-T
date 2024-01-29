import React, { useContext, useState } from 'react'
import { ProfileNameContext } from './ProfileNameContext'
import Messenger from './Messenger';

function Villager() {
    const { profileName, setProfileName } = useContext(ProfileNameContext);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(profileName);

    const handleSave = () => {
        setProfileName(name);
        setEditMode(false);
    }
    return (
        <div>
            {!editMode ? (
                <div>
                    <p>{profileName}</p>
                    <button onClick={() => setEditMode(true)}>Edit Name</button>
                </div>
            ) : (
                <div>
                    <input type='text' value={name}
                        onChange={(event) => setName(event.target.value)}></input>
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
            <Messenger />
        </div>
    )
}

export default Villager