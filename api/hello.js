
export default function handler(req, res) {
  res.status(200).json({ message: `Hello from Chicago!` });
}


export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, as we're not using it in this example
  },
};