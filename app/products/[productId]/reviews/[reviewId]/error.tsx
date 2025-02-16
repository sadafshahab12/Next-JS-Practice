"use client"
//error.tsx file will always take use client
// export default function ErrorBoundary() {
//   return (
//     <div>
//       <h1>Special UI File Error.tsx</h1>
//       <h1>Something went wrong</h1>
//     </div>
//   );
// }
export default function ErrorBoundary( {error, reset}: {error: Error; reset :()=> void} ) {
  return (
    <div>
      <h1>Special UI File Error.tsx</h1>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
