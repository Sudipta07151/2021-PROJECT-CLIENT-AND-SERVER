import * as react from 'react';
import { connect } from 'react-redux';
import { myBookList } from '../actions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
function createData(title, isbn, date) {
    return { title, isbn, date };
}


const ViewAllBooks = (props) => {
    console.log(props.auth);
    const classes = useStyles();
    react.useEffect(() => {
        //props.getBookList('60871d953b118b0888bd0142');
        if (props.auth)
            props.getBookList(props.auth._id);
    }, [props.getBookList])
    // const rows = props.bookList.map((data) => {
    //     return createData(data.name, data.isbn, data.dateAdded)
    // })
    const renderList = () => {
        {
            if (!props.bookList[0])
                return (
                    <TableCell>LOADING</TableCell>
                )
            else
                return (props.bookList[0].map((data) => (
                    <TableRow key={data.isbn}>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell >{data.name}</TableCell>
                        <TableCell >{data.isbn}</TableCell>
                        <TableCell >{data.dateAdded}</TableCell>
                    </TableRow>
                ))
                )
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>TITLE</TableCell>
                        <TableCell align="right">ISBN</TableCell>
                        <TableCell align="right">DATE ADDED</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateTotprops = (state) => {
    // console.log(state)
    return {
        bookList: state.favBooks,
        auth: state.auth
    }
}

export default connect(mapStateTotprops, { getBookList: myBookList })(ViewAllBooks);






