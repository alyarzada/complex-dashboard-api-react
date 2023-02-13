import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Stack,
} from "@mui/material";

const CustomComplexSelection = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography sx={{ color: "#ced4da", fontWeight: 700 }}>
              Mənzil-Tikinti Kooperativi *
            </Typography>
          </Box>
          <Box className="w-[76%]">
            <FormControl classname="w-full min-w-[99.4%] m-1">
              <InputLabel id="demo-simple-select-autowidth-label">
                Please select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Please select"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={10}>Port Baku</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography sx={{ color: "#ced4da", fontWeight: 700 }}>
              Kompleks *
            </Typography>
          </Box>
          <Box sx={{ width: "76%" }}>
            <FormControl sx={{ m: 1, minWidth: "99.4%" }} classname="w-full">
              <InputLabel id="demo-simple-select-autowidth-label">
                Please select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Please select"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={10}>Port Baku</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography sx={{ color: "#ced4da", fontWeight: 700 }}>
              Bina *
            </Typography>
          </Box>
          <Box sx={{ width: "76%" }}>
            <FormControl classname="w-full min-w-[99.4%] m-1">
              <InputLabel id="demo-simple-select-autowidth-label">
                Please select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                // value={age}
                // onChange={handleChange}
                autoWidth
                label="Please select"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={10}>Port Baku</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography sx={{ color: "#ced4da", fontWeight: 700 }}>
              Mənzil *
            </Typography>
          </Box>
          <Box sx={{ width: "76%" }}>
            <FormControl sx={{ m: 1, minWidth: "99.4%" }} classname="w-full">
              <InputLabel id="demo-simple-select-autowidth-label">
                Please select
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Please select"
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={10}>Port Baku</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomComplexSelection;
