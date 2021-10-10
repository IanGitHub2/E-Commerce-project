import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller, useForm } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
            render = {({ field}) => (
            <TextField {...field} fullWidth label={label} rule={{ required: true }} />
            )}
            as={TextField}
            name={name}
            control={control}
            label={label}
            fullWidth
            required={required}
            error={isError}
        />
        </Grid>
    )
}

export default FormInput;
