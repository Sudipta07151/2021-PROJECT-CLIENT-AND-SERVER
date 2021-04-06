import React, { useParams } from 'react';
import MCQ from './MCQ'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import PropTypes from 'prop-types';

const menuItems = [
    {
        key: 1,
        item: 'View All Created',
        icon: <ViewComfyRoundedIcon />,
        link: '/'
    },
    {
        key: 2,
        item: 'Create New',
        icon: <AddCircleOutlineIcon />,
        link: '/CreateMCQ'
    }
]

const MCQData = () => {
    const [list, setList] = useState([]);
        setList(
            menuItems.map(({ key, item, icon, link }) => (
                <ListItem
                    button
                    key={key}
                    component={Link}
                    to={link}
                    onClick={handleDrawerToggle}>
                    <ListItemIcon >{icon}</ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            ))
        );
    },

    return (
        <MCQ>
            {list}
        </MCQ>
    )
};

export { MCQData as default };