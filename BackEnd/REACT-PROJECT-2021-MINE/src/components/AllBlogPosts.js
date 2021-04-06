import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PostCard from '../components/reusable/PostCard'
import Masonry from 'react-masonry-css';
const AllBlogPosts = () => {
    const [note, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            }).then(data => {
                setNotes(data);
            })
    }, [update])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'DELETE'
        });
        const newData = note.filter(note => note.id != id);
        setNotes(newData);
    }

    const likesUpdate = (id, likes) => {
        setUpdate(false);
        fetch(`http://localhost:8000/notes/${id}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ likes: likes + 1 })
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.likes);
            setUpdate(true);
        });
    }
    const favUpdate = (id, favourite) => {
        console.log('clicked');
        setUpdate(false);
        fetch(`http://localhost:8000/notes/${id}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ favourite: !favourite })
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setUpdate(true);
        });
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
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

export default AllBlogPosts;
