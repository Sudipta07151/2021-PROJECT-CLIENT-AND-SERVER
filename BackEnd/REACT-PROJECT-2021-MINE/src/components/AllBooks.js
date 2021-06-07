import react from 'react';
import Grid from '@material-ui/core/Grid';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { getAllBooks } from '../actions/index';
import FavBookListUser from '../components/reusable/FavBookListUser';
import LendBorrowBtn from '../components/reusable/LendBorrowBtn';
import Container from '@material-ui/core/Container';


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
                        // <li>
                        //     <p>ISBN: {data.isbn}</p>
                        //     <p>TITLE:{data.name}</p>
                        //     <p>CONTRIBUTED BY:{data._user.name}</p>
                        // </li>
                        <FavBookListUser book={data}>
                            <LendBorrowBtn />
                        </FavBookListUser>
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
        <Grid>
            {renderList()}
        </Grid>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        AllBooks: state.allBooks
    }
}

export default connect(mapStateToProps, { getAllBooks: getAllBooks })(AllBooks);