import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useField } from 'formik';
import { TextField, Box, InputAdornment } from '@mui/material';

const CustomTextField = ({
<<<<<<< HEAD
  component,
  multiline,
  label,
  sx,
  className = "mb-6",
  number = false,
  regexp = false,
  mask,
  masseur,
  readyAnswer,
  adornments,
  ...props
=======
	component,
	multiline,
	label,
	sx,
	className = 'mb-6',
	number = false,
	regexp = false,
	mask,
	masseur,
	readyAnswer,
	adornments,
	endAdornmentIcon,
	...props
>>>>>>> 9802ab4bff8a9b6ee1caff11a130e2398539b16a
}) => {
	const [field, meta, helpers] = useField((props = { name: '' }));
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		if (masseur) {
			helpers.setValue(masseur.value);
		} else if (readyAnswer) {
			helpers.setValue(readyAnswer);
		}
	}, [masseur]);

	useEffect(() => {
		if (readyAnswer) {
			helpers.setValue(readyAnswer);
		}
	}, [readyAnswer]);

<<<<<<< HEAD
  return (
    <Box className={`${className}`} sx={sx}>
      {!regexp ? (
        <TextField
          className="w-full"
          autoComplete="off"
          id="outlined-basic"
          multiline={multiline}
          label={label}
          value={readyAnswer && readyAnswer}
          error={meta.error && meta.touched}
          onChange={(e) =>
            number
              ? helpers.setValue(Number(e.target.value))
              : helpers.setValue(e.target.value)
          }
          sx={{
            "& .MuiInputBase-input": {
              height: "50px",
            },
          }}
          type={adornments ? (showPassword ? "text" : "password") : "text"}
          InputProps={
            adornments
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
=======
	return (
		<Box className={`${className}`} sx={sx}>
			{!regexp ? (
				<TextField
					className='w-full'
					autoComplete='off'
					id='outlined-basic'
					multiline={multiline}
					label={label}
					value={readyAnswer && readyAnswer}
					// error={meta.error && meta.touched}
					onChange={(e) =>
						number
							? helpers.setValue(Number(e.target.value))
							: helpers.setValue(e.target.value)
					}
					// InputLabelProps={{
					//   style: { transform: "translateY(9.5px)" },
					// }}

					sx={{
						'& .MuiInputBase-input': {
							height: '40px',
						},
					}}
					size='small'
					type={adornments ? (showPassword ? 'text' : 'password') : 'text'}
					InputProps={
						adornments
							? {
									endAdornment: (
										<InputAdornment position='end'>
											{/* <IconButton
>>>>>>> 9802ab4bff8a9b6ee1caff11a130e2398539b16a
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
<<<<<<< HEAD
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
          {...props}
        />
      ) : (
        <InputMask mask={mask}>
          {(inputProps) => (
            <TextField
              className={`w-full ${className}`}
              autoComplete="off"
              id="outlined-basic"
              multiline={multiline}
              label={label}
              error={meta.error && meta.touched}
              onChange={(e) =>
                number
                  ? helpers.setValue(Number(e.target.value))
                  : helpers.setValue(e.target.value)
              }
              sx={{
                "& .MuiInputBase-input": {
                  height: "50px",
                },
              }}
              {...props}
              {...inputProps}
            />
          )}
        </InputMask>
      )}
    </Box>
  );
=======
                      </IconButton> */}
											{endAdornmentIcon}
										</InputAdornment>
									),
							  }
							: null
					}
					{...props}
				/>
			) : (
				<InputMask mask={mask}>
					{(inputProps) => (
						<TextField
							className={`w-full ${className}`}
							autoComplete='off'
							id='outlined-basic'
							multiline={multiline}
							label={label}
							error={meta.error && meta.touched}
							onChange={(e) =>
								number
									? helpers.setValue(Number(e.target.value))
									: helpers.setValue(e.target.value)
							}
							// sx={{
							//   "& .MuiInputBase-input": {
							//     height: "40px",
							//   },
							// }}
							{...props}
							{...inputProps}
						/>
					)}
				</InputMask>
			)}
		</Box>
	);
>>>>>>> 9802ab4bff8a9b6ee1caff11a130e2398539b16a
};

export default CustomTextField;
