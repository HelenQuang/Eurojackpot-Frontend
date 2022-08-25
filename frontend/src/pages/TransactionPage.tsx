import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Alert,
} from "@mui/material";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const topupAmount = [10, 20, 30, 50];

const TransactionPage = () => {
  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();

  // const createOrder = (data, actions) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: { value: order.totalPrice },
  //       },
  //     ],
  //   });
  // };

  // const successPaymentHandler = (data, actions) => {
  //   return actions.order.capture().then((details) => {
  //     dispatch(payOrder(id, details));
  //   });
  // };

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
      <h2>Topup Money</h2>
      <FormControl>
        <FormLabel id="top-up" style={{ marginBottom: "1rem" }}>
          Please select the amount of money you want to topup
        </FormLabel>
        <RadioGroup
          aria-labelledby="top-up"
          defaultValue="10"
          style={{ alignItems: "center" }}
        >
          {topupAmount.map((amount) => (
            <FormControlLabel
              key={amount}
              value={amount}
              control={<Radio />}
              label={`${amount} Euros`}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {isPending && <CircularProgress />}
      {isRejected && <Alert severity="error">SDK loading error</Alert>}
      {isResolved && (
        <PayPalButtons
        // createOrder={createOrder}
        // onApprove={successPaymentHandler}
        // className="paypal-btn"
        />
      )}
    </div>
  );
};

export default TransactionPage;
