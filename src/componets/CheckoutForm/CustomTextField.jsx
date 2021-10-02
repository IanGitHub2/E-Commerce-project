import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller, useForm } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
    const { control } = useForm();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
            render = {({ field}) => (
            <TextField {...field} fullWidth label={label} rules={{ required: true }} />
            )}
            control={control}
            name={name}
            defaultValue=""
        />
        </Grid>
    )
}

export default FormInput;
