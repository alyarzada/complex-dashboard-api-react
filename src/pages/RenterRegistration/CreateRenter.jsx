import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomSelect from "../../../components/Form/CustomSelect";

const CreateRenter = () => {
  return (
    <Box>
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("giriskarti")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-logoColor" />
              }
              aria-label="breadcrumb"
            >
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Ana Səhifə
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris kartlari
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris karti
              </Link>
              <Typography underline="hover" key="2" className="text-[#aab8c5]">
                Yenisini yaradin
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box className="bg-bgLight dark:bg-bgMain">
        <Formik
          initialValues={{
            request: "",
            newCard: "",
            amount: "",
            comment: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Box className="p-6">
                <CustomTextField readOnly label="Muraciet" name="request" />
                <CustomSelect
                  name="newCard"
                  options={optionsProj}
                  label="Yeni kart"
                />
                <CustomTextField name="amount" label="Sayi" />
                <CustomTextField name="comment" label="Serhiniz" />
              </Box>
              <Stack
                className="bg-slate-600 px-6 py-4"
                direction="row"
                justifyContent="space-between"
              >
                <Button startIcon={<ReplyOutlinedIcon />} variant="contained">
                  {t("geri")}
                </Button>
                <Button startIcon={<TaskAltOutlinedIcon />} variant="contained">
                  {t("yarat")}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateRenter;
