import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../../../actions/posts_action';


let CreatePost = props => {
    const { handleSubmit, reset, addPost } = props;
    return(
        <div className="card pai-container white black-text" style={{margin: "0px"}}>
            <form onSubmit={handleSubmit(addPost)}>
                <div className="card-content">
                        <Field component="input" type="text" name="title" placeholder="New Title" required/>
                    <div className="new-post">
                        <Field component="textarea" name="text" placeholder="New Message" required/>
                    </div>
                    <input type="reset" className="waves-effect waves-light btn blue" style={{marginRight: "10px"}} value="Cancel" onClick={reset}/>
                    <input type="submit" className="waves-effect waves-light btn" value="Create"/>
                </div>
            </form>
        </div>

    );
}


CreatePost = reduxForm({
    form: 'createPostForm'
})(
   connect(null, { addPost }) (CreatePost)
);

export default CreatePost;