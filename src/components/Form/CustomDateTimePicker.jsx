import { useState, useEffect } from 'react';
import { TextField, Box, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import {
	LocalizationProvider,
	DesktopDateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const CustomDateTimePicker = ({
	htmlFor,
	label,
	defaultValue,
	className,
	calendar,
	...props
}) => {
	const { t } = useTranslation();
	const [field, meta, helpers] = useField(props);
	const [date, setDate] = useState(defaultValue ? defaultValue : '');
	useEffect(() => {
		helpers.setValue(date);
	}, [date]);

	const dataStartHandler = (value) => {
		if (calendar) {
			setDate(
				`${value.$y}-${
					value.$M.toString().length === 1 ? `0${value.$M + 1}` : value.$M
				}-${value.$D.toString().length === 1 ? `0${value.$D}` : value.$D}, ${
					value.$H.toString().length === 1 ? `0${value.$H}` : value.$H
				}:${value.$m.toString().length === 1 ? `0${value.$m}` : value.$m}`,
			);
		} else {
			setDate(`${value.$D} ${months[value.$M]}, ${value.$y}`);
		}
	};

	return (
		<Box className={`mb-6 ${className}`}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDateTimePicker
					className='w-full'
					label={label}
					value={date}
					onChange={dataStartHandler}
					type='time'
					renderInput={(params) => (
						<TextField
							sx={{
								'& .MuiInputBase-input': {
									paddingTop: '28px',
									paddingBottom: '29px',
								},
							}}
							{...params}
							error={meta.error && meta.touched}
						/>
					)}
				/>
				{meta.error && meta.touched ? (
					<FormHelperText className='text-red-500 ml-3'>Tarix seçin!</FormHelperText>
				) : null}
			</LocalizationProvider>
		</Box>
	);
};

export default CustomDateTimePicker;
