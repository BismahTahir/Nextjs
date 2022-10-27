import React from 'react'
import Head from 'next/head';

export default function Meta({title,description,keywords}) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="keywords" content={keywords} />
      <meta name="content" content={description} />

      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps={
    "title":"post blogs",
    "keywords":"Latest blog,Read Post,",
    "description":"Sample nextjs post website"
}
