// import type { Metadata } from 'next';
// import PropertyDetail from '@/components/PropertyDetail';

// interface Props {
//   params: { id: string }
// }

// // Mock data - replace with actual API call
// const getProperty = async (id: string) => {
//   return {
//     id: 1,
//     title: "Luxury Waterfront Villa",
//     price: "$2,500,000",
//     location: "Miami Beach, FL",
//     description: "Stunning waterfront villa with panoramic ocean views...",
//     images: [
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
//     ],
//     details: {
//       beds: 5,
//       baths: 4,
//       area: "4,500",
//       type: "Villa",
//       status: "For Sale",
//       yearBuilt: 2020,
//     },
//   };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const property = await getProperty(params.id);
  
//   return {
//     title: property.title,
//     description: `${property.title} - ${property.location}. ${property.description.substring(0, 150)}...`,
//     openGraph: {
//       title: property.title,
//       description: property.description,
//       images: [{ url: property.images[0], width: 1200, height: 630, alt: property.title }],
//     },
//   };
// }

// export default async function Page({ params }: Props) {
//   const property = await getProperty(params.id);
//   return <PropertyDetail property={property} />;
// }


