import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <h1>
        Dynamic routes (Lisitng: useful when implementing the list detail
        pattern in any ui application)
      </h1>
      <h1>Nested Dynamic routes (Product productId reviewId) </h1>
      <h1>Catch all Segments (docs feature concept)</h1>
      <h1>Page not found -- Special File</h1>
      <h1>Next.js 14 Tutorial - 11 - File Colocation (Dashboard line chart)</h1>
      <h1>
        Next.js 14 Tutorial - 12 - Private Folders (_lib folder , private file)
      </h1>
      <h1>
        Next.js 14 Tutorial - 13 - Route Groups -- Auth folder --(Register Login
        forgot password) for making group routing write the folder name in
        (auth) -- due to () the name will be ommited from url auth
      </h1>
      <h1>Next.js 14 Tutorial - 18 - Layout </h1>
      <h1>
        Next.js 14 Tutorial - 19 - Link Component Navigation ( Link component --
        is client side navigation component )
      </h1>
      <h1>
        Next.js 14 Tutorial - 20 - Active Links (For active link next js give us
        pathname hook to show the links is active -- i do some work in auth
        folder layout file)
      </h1>
      <h1>Next.js 14 Tutorial - 23 - Loading UI -- Special FileSpecial File loading.tsx</h1>
      <h1>Next.js 14 Tutorial - 24 - Error Handling -- Special File</h1>
      <h1>Next.js 14 Tutorial - 25 - Recovering from Errors</h1>
      <h1>Next.js 14 Tutorial - 28 - Parallel Routes (rendering of multiple page in the same layout) complex Dashboard </h1>
      <h1><Link href={"/dynamic-routes"}>Dynamic Routes</Link> </h1>
    </>
  );
}
