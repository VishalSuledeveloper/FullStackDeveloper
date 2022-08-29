import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom'

const PostDetails = (props) => {
    let params = useParams()
    let [searchParams] = useSearchParams()
    console.log(props)
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                {params.topic} Details Page
            </div>
            <div className="panel-body">
                <p>
                    {params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>
                <h3>Your are on page {searchParams.getAll('page')} </h3>
            </div>
        </div>
        
    )
}

export default PostDetails;