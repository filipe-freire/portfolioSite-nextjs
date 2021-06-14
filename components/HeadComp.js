import Head from "next/head";

export default function HeadComp({ title, children }) {
  return (
    <Head>
      <title>{`${title} | Filipe Freire`}</title>
      {children}
    </Head>
  );
}
