export default function handler(req, res) {
  const events = [
    { slot: "SLOT-1", name: "Welcome Song", duration: "3 min", incharge: "Entry of Teachers" },
    { slot: "SLOT-2", name: "Lamp Lighting", duration: "3 min", incharge: "With Saraswati Vandana" }
  ];
  res.status(200).json(events);
}
