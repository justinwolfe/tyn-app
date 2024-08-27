// app/routes/newsletter/index.tsx
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

type LoaderData = {
  message: string;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ message: 'Hello World' });
};

export default function Newsletter() {
  const { message } = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
