import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const InputFieldComponent = React.forwardRef(({ label, ...props }, ref,size) => {
    return (
        <TextField
            label={label}
            inputRef={ref}
            variant="outlined"
            size={size}
            {...props}
    
        />
    );
});

InputFieldComponent.propTypes = {
    label: PropTypes.string.isRequired,
};

export default InputFieldComponent;
