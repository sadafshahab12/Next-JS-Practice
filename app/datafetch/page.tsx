// "use client"
// import React, { useEffect, useState } from "react";

// interface PhotosProps {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }
// const FetchData = () => {
//   const [data, setData] = useState<PhotosProps[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   useEffect(() => {
//     const fetchPhotoData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/photos"
//         );
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchPhotoData();
//   }, []);
//   return (
//     <div>
//       {data.map((photos: PhotosProps, id: number) => (
//         <div key={id}>
//           <h1>{photos.title}</h1>
//           <p>{photos.url}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchData;
import React from "react";
interface PhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!response.ok) {
    throw new Error("Failed to Fetch data");
  }
  const photos = await response.json();
  console.log(photos)
  return (
    <div>
      {photos.map((photos: PhotosProps) => {
        <div key={photos.id}>
          <h1>{photos.title}</h1>
          <p>{photos.url}</p>
        </div>;
      })}
    </div>
  );
};

export default page;
