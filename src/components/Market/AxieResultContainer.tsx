import {  Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import styled from "styled-components";
import AxieResult, { AxieResultType } from "../../models/AxieResult";
import Button from "../UI/Button";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const AxieResultContainer: React.FC<{ axieDetail: AxieResultType }> = ({
  axieDetail,
}) => {
  const dispatch = useDispatch();
  const AxieDetailResult = new AxieResult(axieDetail);

  return (
    <ResultContainer iconurl={AxieDetailResult.axieClassIcon}>
      <figure>
        <figcaption>#{AxieDetailResult.axieId}</figcaption>
        <img src={AxieDetailResult.axieImage} alt={AxieDetailResult.axieClass}/>
      </figure>
      <div>PHP {AxieDetailResult.axiePrice}</div>
      <Formik
        initialValues={{ quantity: 1 }}
        validate={(values) => {
          const errors: Partial<{ quantity: string }> = {};
          if (values.quantity < 1) {
            errors.quantity = "1-999 only";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            cartActions.addItemToCart({
              axieId: AxieDetailResult.axieId,
              axieClass: AxieDetailResult.axieClass,
              axieClassIcon: AxieDetailResult.axieClassIcon,
              axieImage: AxieDetailResult.axieImage,
              axiePrice: AxieDetailResult.axiePrice,
              quantity: values.quantity,
            })
          );
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ values, submitForm, isSubmitting }) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                name="quantity"
                type="number"
                min="1"
                helperText=" "
              />
            </Box>
            {/* {loadingStatus === "pending" && (
                <div className="centered">
                  <LoadingSpinner />
                </div>
              )} */}
            <Box margin={1}>
              <Button
                className="action"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                <FaCartPlus size={25} />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </ResultContainer>
  );
};

const ResultContainer = styled(Paper)<{ iconurl: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin: 8px 8px;
  width: 202px;
  background-color: rgba(110, 110, 110, 0.7) !important;
  & figure {
    flex: 1;
  }
  & figcaption {
    font-weight: bold;
    display: flex;
    text-align: center;
    padding: 2px;
    /* background-color: #eee; */
  }
  & figcaption::before {
    display: inline-block;
    height: 22px;
    width: 22px;
    content: url(${(props) => props.iconurl});
  }
  & img {
    width: 100%;
  }
  & form {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    & .MuiBox-root > * {
    }
    & input {
      width: 40px;
    }
    & .action {
      height: 70%;
    }
  }

  &:hover {
    margin-top: -2px;
    box-shadow: 5px 5px 20px black;
    background-color: rgba(242, 242, 242, 0.8) !important;
    transition: all 0.4s ease-in-out;
  }
  @media screen and (max-width: 820px) {
    width: 164px;
  }
  @media screen and (max-width: 599px) {
    flex: auto;
  }
  @media screen and (max-width: 375px) {
    width: 161px;
  }
`;

export default AxieResultContainer;
