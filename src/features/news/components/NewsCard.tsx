import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import type { Article } from '@/types/news';

export const NewsCard = ({ article }: { article: Article }) => {
	const navigate = useNavigate();

	const handleReadMore = () => {
		navigate(`/article/${encodeURIComponent(article.title)}`, { state: { article } });
	};

	return (
		<Card className='flex flex-col h-full hover:shadow-lg transition-shadow'>
			<CardHeader className='p-0'>
				<img
					src={article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'}
					className='h-48 w-full object-cover'
					alt={article.title}
				/>
			</CardHeader>
			<CardHeader>
				<div className='flex justify-between items-center mb-2'>
					<Badge variant='secondary'>{article.topic}</Badge>
					<span className='text-xs text-muted-foreground'>
						{new Date(article.publishedAt).toLocaleDateString('en-US')}
					</span>
				</div>
				<CardTitle className='line-clamp-2 text-xl'>{article.title}</CardTitle>
			</CardHeader>
			<CardContent className='grow'>
				<p className='text-sm text-muted-foreground line-clamp-3'>
					{article.description || 'No description provided for this article.'}
				</p>
			</CardContent>
			<CardFooter>
				<Button onClick={handleReadMore} variant='default' className='w-full'>
					Read More
				</Button>
			</CardFooter>
		</Card>
	);
};
