import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { startAddPost } from '../../actions/posts_action';

class CreatePost extends React.Component{
    render(){
        const { startAddPost, handleSubmit, reset, pristine, submitting } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(startAddPost)}>
                    <div className="card-content">
                            <Field component="input" type="text" name="title" placeholder="New Title" required/>
                        <div className="new-post">
                            <Field component="textarea" name="text" placeholder="New Message" required/>
                        </div>
                        <input type="reset" className="waves-effect waves-light btn blue" style={{marginRight: "10px"}} value="Cancel" onClick={reset}/>
                        <input type="submit" className="waves-effect waves-light btn" value="Create" disabled={pristine || submitting}/>
                    </div>
                </form>
            </div>
    
        );
    }
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('createPostForm'));
};

const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
});

CreatePost = reduxForm({
    form: 'createPostForm',
    onSubmitSuccess: afterSubmit
})(
   connect(undefined, mapDispatchToProps) (CreatePost)
);

export default CreatePost;