const Result = ({ result }) =>
!!result && (
  <>
    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
    <strong>
      {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
    </strong>
  </>
);

export default Result;  
