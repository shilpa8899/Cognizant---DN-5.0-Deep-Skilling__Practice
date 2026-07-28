import React from "react";

function CourseDetails() {


    let login = true;


    if(login)
    {
        return (

            <div>

                <h2>Course Details</h2>

                <p>
                    React Full Stack Development Course
                </p>

            </div>

        );
    }

    else
    {
        return (

            <div>

                <h2>
                    Please Login To View Course
                </h2>

            </div>

        );
    }

}


export default CourseDetails;