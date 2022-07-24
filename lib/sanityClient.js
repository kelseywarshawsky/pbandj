import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '7onsntp2',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skxorINP34ED8cKy5WRcCCzo81B8LcSBjqndiCTpNUU3nLU2v8UhsNl6ao5hBoxjOssZ2pfXmptqqEaXsPwGTLhuIdVNI8bfq2AopRTGubA5W5EoeolXC9P7TFSicjGTU5lYg6JNhNR4yPFxYqHgLu8dzqub2ZFsdEv1Hk5Xf52o2Aasj0j4',
  useCdn: false,
});
