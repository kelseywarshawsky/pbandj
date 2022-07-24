const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '7onsntp2',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY, // or leave blank for unauthenticated usage
  useCdn: true // `false` if you want to ensure fresh data
});

export async function getUsers() {
  const query = '*[_type == "users"]';
  const params = {};

  const allUsers = await client.fetch(query, params).then((users) => {
    users.forEach((user) => {
      console.log('user:', user);
    });
    return users;
  });

  return allUsers;
}
