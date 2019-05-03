import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Avatar, Grid, Hidden, IconButton, Toolbar } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	menuButton: {
		marginLeft: -theme.spacing.unit,
	},
	iconButtonAvatar: {
		padding: 4,
	},
	avatar: {
		img: {
			margin: 0,
		},
	},
})

function Header({ classes, onDrawerToggle, title }) {
	return (
		<AppBar color="primary" position="sticky">
			<Toolbar>
				<Grid container spacing={8} alignItems="center">
					<Hidden smUp>
						<Grid item>
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={onDrawerToggle}
								className={classes.menuButton}
							>
								<Menu />
							</IconButton>
						</Grid>
					</Hidden>
					<Grid item xs />
					<Grid item>
						<IconButton color="inherit" className={classes.iconButtonAvatar}>
							<Avatar className={classes.avatar} src="/images/BL-white.png" />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	onDrawerToggle: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
