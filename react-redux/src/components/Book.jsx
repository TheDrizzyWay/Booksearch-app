import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 300
    },
    media: {
        height: 300,
        width: 250
    }
};

function BookCard (props) {
    const { classes, volumeInfo } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={volumeInfo.imageLinks.thumbnail}
                    title="Book Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {volumeInfo.title}
                    </Typography>
                    <Typography component="div">
                        <h3>Author: {volumeInfo.authors ? volumeInfo.authors[0] : 'N/A'}</h3>
                        <h4>Pages: {volumeInfo.pageCount}</h4>
                        <h4>Published: {volumeInfo.publishedDate}</h4>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
          View Details
                </Button>
                <Button size="small" color="primary">
          Buy
                </Button>
            </CardActions>
        </Card>
    );
}

BookCard.propTypes = {
    classes: PropTypes.object.isRequired,
    volumeInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCard);
