import StyledLoadingSpinner, { StyledMarketSpinner } from "../styles/LoadingSpinner.styled";

const LoadingSpinner: React.FC<{ className?: string }> = (props) => {
  return (
    <StyledLoadingSpinner className={props.className}></StyledLoadingSpinner>
  );
};

export const MarketLoadingSpinner: React.FC<{ className?: string }> = (
  props
) => {
  return (
    <StyledMarketSpinner>
      <div></div>
      <div></div>
      <div></div>
    </StyledMarketSpinner>
  );
};

export default LoadingSpinner;
