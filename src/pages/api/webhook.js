export default async (req, res) => {
  console.log("REQ", req.body, req.params, req.query, req.headers)
  res.send(null)
}
