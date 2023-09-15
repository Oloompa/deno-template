# deno-template

Let's use Deno !

## Setup

### Deno

Install with `curl -fsSL https://deno.land/x/install/install.sh | sh`.
Update using `deno upgrade`.
Read the [doc](https://docs.deno.com/runtime/manual/getting_started/).
Check the standard [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).
Check the [Deno Runtime API](https://deno.land/api).
Check the [examples](https://examples.deno.land/).

## Basic commands

deno run first_steps.ts

| Action        | Command                                   |
| ------------- | ----------------------------------------- |
| Dev           | `deno run --watch --check main.ts`        |
| Debug         | `deno run --inspect-wait --watch main.ts` |
| Start         | `deno run main.ts`                        |
| Test          | `deno test -h`                            |
| Compile       | `deno compile -h`                         |
| Format        | `deno fmt -h`                             |
| Lint          | `deno lint -h`                            |
| Type checking | `deno check --all maint.ts`               |

continue [there](https://docs.deno.com/runtime/manual/basics/debugging_your_code#vscode)
