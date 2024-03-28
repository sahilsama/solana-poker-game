This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]).

## Getting Started

- Create a env.local file in the root directory and copy paste the env variables from the env.example file.

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Start coding:

- To connect to the database import supabase client **`import { supabase } from '@/lib/initSupabase'`** and use it to interact with the database.
See auto generated DB API docs at [https://supabase.com/dashboard/project/wopdxclmoplvvquzndei/api](https://supabase.com/dashboard/project/wopdxclmoplvvquzndei/api) message @elt97 if you need access.

- To create API routes create a route.ts file in the api directory and export a default function that takes a request and response object as arguments. See the example in the api directory.

- This project use ahooks. You can find the documentation at [https://ahooks.js.org/](https://ahooks.js.org/)
To make request to next api routes use the useRequest hook from ahooks (see example in page.tsx).


## Caution

Please do not commit directly to the main branch. Create a new branch from it and then create a pull request.