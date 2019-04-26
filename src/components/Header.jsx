import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
        width: '100%'
    },
    grow: {
        flexGrow: 1
    },
    title: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        "position": 'relative',
        "borderRadius": theme.shape.borderRadius,
        "backgroundColor": fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        "marginLeft": 0,
        "width": '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto'
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            "width": 120,
            '&:focus': {
                width: 200
            }
        }
    }
});

class SearchAppBar extends Component {
  state = {
      userinput: '',
      focus: false
  };

  onChangeHandler = e => {
      const { value } = e.target;
      this.setState({ userinput: value });
  }

  onFocusHandler = () => {
      this.setState({ focus: true });
  }

  onBlurHandler = () => {
      this.setState({ focus: false });
  }

  onKeyUpHandler = (e) => {
      const { focus, userinput } = this.state;
      if (focus && e.keyCode === 13) {
          this.props.searchBook(userinput);
      }
  }

  render () {
      const { classes } = this.props;
      return (
          <div className={classes.root}>
              <AppBar position="static">
                  <Toolbar>
                      <Typography className={classes.title} variant="h6" color="inherit">
            Welcome to the Drizzy Bookfinder App
                      </Typography>
                      <div className={classes.grow} />
                      <div className={classes.search}>
                          <div className={classes.searchIcon}>
                              <SearchIcon />
                          </div>
                          <InputBase
                              placeholder="Search…"
                              classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput
                              }}
                              value={this.state.userinput}
                              onChange={this.onChangeHandler}
                              onFocus={this.onFocusHandler}
                              onBlur={this.onBlurHandler}
                              onKeyUp={this.onKeyUpHandler}
                          />
                      </div>
                  </Toolbar>
              </AppBar>
          </div>
      );
  }
}

SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    searchBook: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchAppBar);
