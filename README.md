This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
an open [http://localhost:3000/dashboard] 
PiBook/PiBox Devices
      |
  [Internet Sync]
      ↓
PiSync Cloud API (mocked)
      ↓
 PiSync Admin Dashboard
      |
       Next  
  
       |
   [Express.js]
       |
 [Mocked API/Data]

How to handle 50000 users 
If scaling to 50k devices:

1) Pagination & Filtering – Only load 50-100 devices at once. I have seen the implementation of filtering and handled it on the frontend side in my previous internship which was also in edTech. 

2) WebSocket for Real-Time Sync Status – Push updates instead of polling.

3)Backend Optimization

Move from in-memory to MongoDB/Postgres.

Add indexing on deviceId and syncStatus.
4) The Redis Service is better for caching and enhancing speed.
