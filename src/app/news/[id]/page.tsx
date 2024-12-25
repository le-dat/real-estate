// import type { Metadata } from 'next';
// import ArticleDetail from '@/components/ArticleDetail';

// interface Props {
//   params: { id: string }
// }

// interface Article {
//   id: number;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: string;
// }

// const getArticle = async (id: string): Promise<Article> => {
//   try {
//     const response = await fetch(`/api/articles/${id}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const article = await response.json();
//     return article;
//   } catch (error) {
//     console.error('Failed to fetch article:', error);
//     throw error;
//   }
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const article = await getArticle(params.id);
  
//   return {
//     title: article.title,
//     description: `${article.content.substring(0, 150)}...`,
//     openGraph: {
//       title: article.title,
//       description: article.content.substring(0, 150),
//       type: 'article',
//       publishedTime: article.date,
//       authors: [article.author],
//       images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: article.title,
//       description: article.content.substring(0, 150),
//       images: [article.image],
//     },
//   };
// }

// export default async function Page({ params }: Props) {
//   const article = await getArticle(params.id);
//   return <ArticleDetail article={article} />;
// }

// export async function generateStaticParams() {
//   const response = await fetch('/api/articles');
//   const articles = await response.json();
//   return articles.map((article: Article) => ({
//     params: { id: article.id.toString() },
//   }));
// }
