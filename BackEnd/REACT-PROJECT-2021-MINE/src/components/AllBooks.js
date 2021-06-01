import react from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { getAllBooks } from '../actions/index';

const AllBooks = (props) => {
    console.log('props:', props.AllBooks)
    react.useEffect(() => {
        props.getAllBooks();
    }, [getAllBooks])

    const renderList = () => {
        if (props.AllBooks.length !== 0) {
            return (
                props.AllBooks.map(data => {
                    return (
                        <li>
                            <p>ISBN: {data.isbn}</p>
                            <p>TITLE:{data.name}</p>
                            <p>CONTRIBUTED BY:{data._user.name}</p>
                        </li>
                    )
                })
            )
        }
        else {
            return (
                <li>NO BOOKS</li>
            )
        }
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        AllBooks: state.allBooks
    }
}

export default connect(mapStateToProps, { getAllBooks: getAllBooks })(AllBooks);