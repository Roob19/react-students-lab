import React from 'react';
import {useState} from 'react';
import './NewStudentForm.css';

const NewStudentForm = ({addStudent}) => {
    const [newStudent, setNewStudent] = useState({
        name: '', 
        bio: '', 
        scores: ''
    });

    const handleChange = (event) => {
        const newStudentDetail = {...newStudent, [event.target.name]: event.target.value};
        setNewStudent(newStudentDetail);
    }

    const handleAddStudent = (event) => {
        event.preventDefault();
        addStudent(newStudent);
        setNewStudent({
            name: '', 
            bio: '', 
            scores: ''
        });
    }

    return (
        <form
            onSubmit={handleAddStudent}
            className="NewSkillForm"
            >
                <label>Name</label>
                    <input
                        name="name"
                        value={newStudent.name}
                        onChange={handleChange}
                        required
                        // pattern=".{4,}"
                        placeholder="New Student's Name"
                    />
                <label>Bio</label>
                    <input
                        name="bio"
                        value={newStudent.bio}
                        onChange={handleChange}
                        // required
                        // pattern=".{4,}"
                        placeholder="New Student's Bio"
                    />
                <label>Scores</label>
                    <input
                        name="date"
                        value={newStudent.scores.date}
                        onChange={handleChange}
                        // required
                        // pattern=".{4,}"
                        placeholder="Score Date (YYYY-MM-DD)"
                    />
                    <input
                        name="score"
                        value={newStudent.scores.score}
                        placeholder="Percentage Score"
                    />
                <button type="submit">ADD STUDENT</button>
        </form>
    );
}

export default NewStudentForm;