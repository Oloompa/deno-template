// try `deno run script/example -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
import { parse } from "https://deno.land/std@0.201.0/flags/mod.ts";

console.dir(parse(Deno.args));