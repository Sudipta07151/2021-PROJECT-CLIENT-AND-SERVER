import React, { useEffect, useState } from 'react';
import PostCard from '../components/reusable/PostCard'
import Masonry from 'react-masonry-css';

const FavouritePosts = () => {
    const [note, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            }).then(data => {
                const newData = data.filter(note => note.favourite != false);
                console.log(newData);
                setNotes(newData);
            })
    }, [update])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    const handleDelete = () => {

    }
    const likesUpdate = () => {

    }
    const favUpdate = () => {

    }
    return (
        <div>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {note.map(data => {
                    return (
                        <div key={data.id}>
                            <PostCard
                                data={data}
                                handleDelete={handleDelete}
                                likesUpdate={likesUpdate}
                                favUpdate={favUpdate}
                            />
                        </div>
                    )
                })}
            </Masonry>
        </div >
    )
}

export default FavouritePosts;