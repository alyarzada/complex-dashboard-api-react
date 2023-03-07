import {
  Checkbox,
  Autocomplete,
  TextField,
  TextareaAutosize,
  Button,
  Box,
  Typography,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const AdminCreateNewRequest = () => {
  const applicationNumber = [
    { title: "Port Baku" },
    { title: "Test 3" },
    { title: "Test 4" },
  ];

  return (
    <Box className=" bg-bgLight dark:bg-bgMain drop-shadow-lg pt-4 p-2 mb-4">
      <Box className=" py-4 px-2">
        <Typography component="h5" className="dark:text-text2 text-textDark2">
          Müraciət sahibi
        </Typography>

        <Autocomplete
          className="mt-2"
          multiple
          id="checkboxes-tags-demo"
          options={applicationNumber}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              style={{ paddingTop: 6 }}
              {...params}
              label="Zəhmət olmasa seçin"
              placeholder="Favorites"
            />
          )}
        />
      </Box>
      <Box className="flex flex-wrap justify-between py-4 px-2">
        <Box>
          <Typography component="h5" className="dark:text-text2 text-textDark2">
            Müraciət növü
          </Typography>
          <Autocomplete
            className="mt-2"
            multiple
            id="checkboxes-tags-demo"
            options={applicationNumber}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 280 }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label="Zəhmət olmasa seçin"
                placeholder=""
              />
            )}
          />
        </Box>
        <Box>
          <Typography component="h5" className="dark:text-text2 text-textDark2">
            Şöbə
          </Typography>
          <Autocomplete
            className="mt-2"
            multiple
            id="checkboxes-tags-demo"
            options={applicationNumber}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 280 }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label="Zəhmət olmasa seçin"
                placeholder=""
              />
            )}
          />
        </Box>
        <Box>
          <Typography component="h5" className="dark:text-text2 text-textDark2">
            Əməkdaşlar
          </Typography>

          <Autocomplete
            className="mt-2"
            multiple
            id="checkboxes-tags-demo"
            options={applicationNumber}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 280 }}
            renderInput={(params) => (
              <TextField
                style={{ paddingTop: 6 }}
                {...params}
                label="Zəhmət olmasa seçin"
                placeholder=""
              />
            )}
          />
        </Box>
      </Box>
      <Box className="pt-4 p-2">
        <Typography component="h5" className="dark:text-text2 text-textDark2">
          Priorited
        </Typography>

        <Autocomplete
          className="mt-2"
          multiple
          id="checkboxes-tags-demo"
          options={applicationNumber}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              style={{ paddingTop: 6 }}
              {...params}
              label="Zəhmət olmasa seçin"
              placeholder="Favorites"
            />
          )}
        />
      </Box>
      <Box className="pt-4 p-2">
        <Typography component="h5" className="dark:text-text2 text-textDark2">
          Başlıq
        </Typography>
        <TextField
          style={{ paddingTop: 9, marginBottom: 20 }}
          className="w-full mt-2"
          id="outlined-basic"
          label="Başlıq"
          variant="outlined"
        />

        <Typography component="h5" className="dark:text-text2 text-textDark2">
          Müraciətiniz
        </Typography>
        <TextareaAutosize
          className="w-full  bg-bgLight dark:bg-bgMain rounded-lg dark:text-text2 p-1 px-3 mt-2"
          aria-label="minimum height"
          minRows={3}
          placeholder="Mesaj"
          style={{ border: "1px solid #a09f9f57" }}
        />
      </Box>
      <Box className="flex justify-between p-5">
        <Button
          variant="contained"
          className="capitalize text-[#000] bg-[#FDBD06] hover:bg-[#DBA31F]"
          type="submit"
        >
          <CameraAltOutlinedIcon className="text-base mr-1" /> Şəkil
        </Button>
        <Button
          variant="contained"
          className="capitalize bg-[#10CB94] hover:bg-[#159483]"
          type="submit"
        >
          <SendIcon className="text-base mr-1" /> Yarat
        </Button>
      </Box>
    </Box>
  );
};

export default AdminCreateNewRequest;
