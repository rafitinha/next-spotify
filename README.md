This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Geração Acces Token

[Create Spotify Refresh Token ](https://benwiz.com/blog/create-spotify-refresh-token/)

Step 1: Get your Spotify client_id and client_secret
Visit your Spotify developers [dashboard](https://developer.spotify.com/dashboard/applications)

Step 2: Get your access code
Visit the following URL after replacing  `$CLIENT_ID`,  `$SCOPE`, and  `$REDIRECT_URI`  with the information you noted in Step 1. Make sure the  `$REDIRECT_URI`  is URL encoded.

Use $SCOPE=user-read-currently-playing

URL: https://accounts.spotify.com/authorize?response_type=code&client_id=$CLIENT_ID&scope=$SCOPE&redirect_uri=$REDIRECT_URI

Step 3: Get  code  from the redirect URL

Step 4: Get the refresh toke

[Gerar Base 64](https://www.base64encode.org/) use $CILENT_ID:$CLIENT_SECRET


RUN INTO PROMPT COMMAND

```shell
curl -H "Authorization: Basic $BASE64($CILENT_ID:$CLIENT_SECRET)" -d grant_type=authorization_code -d code=$CODE -d redirect_uri=$REDIRECT_URI https://accounts.spotify.com/api/token
```


The result will be a JSON string similar to the following. Take the  `refresh_token`  and save that in a safe, private place. This token will last for a very long time and can be used to generate a fresh  `access_token`  whenever it is needed.

```json
{
    "access_token": "$ACCESS_TOKEN",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "$REFRESH_TOKEN",
    "scope": "playlist-modify-private"
}
```
