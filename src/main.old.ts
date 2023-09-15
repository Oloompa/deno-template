console.log("Welcome to Deno!");

// const res = await fetch("https://deno.com");
// const body = await res.text();
// console.log(body);

// const filenames = Deno.args;
// for (const filename of filenames) {
//   const file = await Deno.open(filename);
//   await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
// }

const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/denoland", {
    // The init object here has a headers object containing a
    // header that indicates what type of response we accept.
    // We're not specifying the method field since by default
    // fetch makes a GET request.
    headers: {
      accept: "application/json",
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

Deno.serve(handler);
