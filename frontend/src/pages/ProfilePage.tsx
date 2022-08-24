import PaidIcon from "@mui/icons-material/Paid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const ProfilePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2>User Profile</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.5rem",
        }}
      >
        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <AccountCircleIcon />
          Name: Helen Quang
        </li>
        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <EmailIcon />
          Email: helen@example.com
        </li>
        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <SportsEsportsIcon />
          <span>Total play: 5 games</span>
        </li>
        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <PaidIcon />
          <span>Current account: 8,00 €</span>
        </li>

        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <AddCardIcon />
          <span>Total topup: 10,00 €</span>
        </li>
        <li style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <CreditScoreIcon />
          <span>Total win: 8,00 €</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePage;
