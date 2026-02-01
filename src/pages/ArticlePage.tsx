import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ArticlePage = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const article = state?.article;

	if (!article) {
		return (
			<div className='flex flex-col items-center justify-center h-screen gap-4'>
				<h2 className='text-2xl font-bold'>Article not found</h2>
				<Button onClick={() => navigate('/')}>Go back home</Button>
			</div>
		);
	}

	return (
		<div className='container mx-auto py-10 px-4 max-w-3xl'>
			<Button variant='ghost' onClick={() => navigate(-1)} className='mb-6'>
				<ArrowLeft className='mr-2 h-4 w-4' /> Back to feed
			</Button>

			<img
				src={article.urlToImage || 'https://via.placeholder.com/800x400?text=News+Image'}
				className='w-full h-100 object-cover rounded-xl mb-8 shadow-md'
				alt=''
			/>

			<div className='flex items-center gap-4 mb-4 text-sm font-medium'>
				<span className='text-primary uppercase tracking-wider'>{article.topic}</span>
				<span className='text-muted-foreground'>•</span>
				<span className='text-muted-foreground'>
					{new Date(article.publishedAt).toLocaleDateString('en-US', {
						dateStyle: 'long',
					})}
				</span>
			</div>

			<h1 className='text-4xl font-extrabold mb-6 leading-tight'>{article.title}</h1>

			<p className='text-xl text-muted-foreground mb-8 leading-relaxed font-light'>
				{article.description}
			</p>

			<div className='prose dark:prose-invert max-w-none mb-10'>
				<p className='text-lg leading-7'>
					{article.content?.split('[+')[0] ||
						'Full content is restricted in the free version of the News API.'}
				</p>
			</div>

			<div className='p-8 border-t bg-muted/30 rounded-2xl'>
				<h3 className='text-lg font-semibold mb-2'>Want to read the full story?</h3>
				<p className='text-muted-foreground mb-6'>
					The original article is available at {article.source.name}.
				</p>
				<Button asChild size='lg'>
					<a href={article.url}>
						View on {article.source.name} <ExternalLink className='ml-2 h-4 w-4' />
					</a>
				</Button>
			</div>
		</div>
	);
};

export default ArticlePage;
