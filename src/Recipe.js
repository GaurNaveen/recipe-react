import React from 'react';
import style from './recipe.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


    

  // This is the setting for the card
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      height: 550,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


// {title,calories,img} are value of the tags that are passed from App.js.
 const Recipe = ({title,calories,image,ingredients,releaseDate}) => {
     console.log(image);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <div className = "card">
        <Card className= {classes.card}>
            <CardHeader title = {title} subheader = "" />

            <CardMedia
        className={classes.media}
        image={image}
        title={title}
        />

        <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {ingredients}
               <br />
               <br />
               <b> Release Date: </b> {releaseDate} 
                </Typography>
        </CardContent>

        </Card>
        </div>
        
    );
};

export default Recipe;