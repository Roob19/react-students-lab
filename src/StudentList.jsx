import React from 'react';
import StudentListItem from './StudentListItem.jsx';
import './StudentList.css';

const StudentList = ({students}) => {
    return (
        <ul className="padding-0">
            {students.map((index, name, bio, scores) => (
                <StudentListItem index={index} name={name} bio={bio} scores={scores}/>
            ))}
        </ul>
    );
}

export default StudentList;