import { Link, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <h3>404 | Page could not be found</h3>
      <Link href="/">
        <Button
          component="a"
          startIcon={<ArrowBackIcon fontSize="small" />}
          sx={{ mt: 3 }}
          variant="contained"
        >
          Go back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
