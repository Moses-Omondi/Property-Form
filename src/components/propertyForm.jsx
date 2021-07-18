import React from 'react'

import { Card, Container, CardContent, makeStyles,TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        display: 'none',
      },
    buttonStyle: {
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        width: '100px'    
    }
})

const PropertyForm = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='md'>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField 
                                variant='outlined'
                                label='Property Name'
                                placeholder='Property Name'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                variant='outlined'
                                label='Property Location'
                                placeholder='Property Location'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                variant='outlined'
                                label='Beds and Bath'
                                placeholder='Beds and Bath'
                                type='number'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                variant='outlined'
                                label='Property Price'
                                placeholder='Property Price'
                                type='number'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                variant='outlined'
                                label='Phone Contact'
                                placeholder='Phone'
                                type='number'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                variant='outlined'
                                label='Email address'
                                placeholder='Email address'
                                type='text'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} item>
                            <TextField
                                variant='outlined'
                                label='Message'
                                placeholder='Additional info'
                                multiline rows={4}
                                type='text'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12} item>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />

                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component='span' className={classes.buttonStyle} >
                                Upload
                            </Button>
                        </label>
                        </Grid>

                        <Grid xs={12} item>
                            <Button variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Container>
        </div>
    )
}

export default PropertyForm
