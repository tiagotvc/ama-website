import React from 'react';
import { TextInput } from 'components/Text/index';
import Button from '@/components/Button';
import InputText from '@/components/InputText';
import { LogoType } from '@/components/Logotype/Logotype';
import Layout from '@/components/Layout/Layout';

export default function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
