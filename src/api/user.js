export default function ({ app, api }) {
   const prefix = "user/";

   app.get(api + prefix, async (req, res) => {
      res.status(200).json({ detail: "User found" })
   })
}
