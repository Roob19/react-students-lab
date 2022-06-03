import React from 'react';

const StudentListItem = (props) => {
    return (
        <ul className="SkillList">
            <li>No. {props.index + 1}</li>
            <li>Name: {props.student.name}</li>
            <li>Bio: {props.student.bio}
                <ul>Scores: {props.student.scores}
                    <li>Date: {props.student.scores.date}</li>
                    <li className="level">Score: {props.student.scores.score}</li>
                </ul>
            </li>
        </ul>
    );
}

export default StudentListItem;