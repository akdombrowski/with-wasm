import "server-only";

import Typography from "@mui/material/Typography";

const exports = await import("@/rust/add.wasm");
const { add_one: addOne } = exports;

export default function RSC({ number }: { number: number }) {
  return <Typography variant="body">{addOne(number)}</Typography>;
}
