import React from "react";

function BlogDetails() {


    let showBlog = true;


    return (

        <div>

            <h2>Blog Details</h2>


            {
                showBlog ?
                <p>
                    Welcome to React Blog Page
                </p>
                :
                <p>
                    No Blogs Available
                </p>
            }


        </div>

    );
}

export default BlogDetails;