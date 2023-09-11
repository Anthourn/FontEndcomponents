const Error = () => {
  return (
    <div className="error">
      <p className="error__emoji">😕</p>
      <p className="error__title">No Definitions found</p>
      <p className="error__copy">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default Error;
