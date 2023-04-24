/* eslint-disable linebreak-style */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCL, getFD, getFP, getLP, getTB,
    }) => {
      getCL(onPerfEntry);
      getFD(onPerfEntry);
      getFP(onPerfEntry);
      getLP(onPerfEntry);
      getTB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
