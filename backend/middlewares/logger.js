export const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.url} ${req.get("host")} ${req.protocol} ${req.path}`
  );
  console.log("Query:", req.query);
    console.log("Params:", req.params);
    console.log('req headers', req.headers);
    console.log("req ip", req.ip);
    console.log("req body", req.body);
    console.log("req original url", req.originalUrl);
  next(); 
};
