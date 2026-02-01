import { useState, useMemo } from 'react';
import { useNews } from '@/features/news/hooks/useNews';
import { useConfig } from '@/hooks/useConfig';
import { NewsCard } from '@/features/news/components/NewsCard';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

import type { Article } from '@/types/news';

const HomePage = () => {
	const { data: articles, isLoading } = useNews();
	const { data: config } = useConfig();

	const [search, setSearch] = useState('');
	const [selectedTopic, setSelectedTopic] = useState('all');
	const [selectedSource, setSelectedSource] = useState('all');
	const [sortBy, setSortBy] = useState('newest');

	const filteredArticles = useMemo(() => {
		if (!articles) return [];

		return articles
			.filter((art: Article) => {
				const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase());
				const matchesTopic = selectedTopic === 'all' || art.topic === selectedTopic;
				const matchesSource = selectedSource === 'all' || art.source.id === selectedSource;

				return matchesSearch && matchesTopic && matchesSource;
			})
			.sort((a: any, b: any) => {
				const dateA = new Date(a.publishedAt).getTime();
				const dateB = new Date(b.publishedAt).getTime();
				return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
			});
	}, [articles, search, selectedTopic, selectedSource, sortBy]);

	if (isLoading) {
		return (
			<div className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
				{[...Array(6)].map((_, i) => (
					<Skeleton key={i} className='h-[350px] w-full' />
				))}
			</div>
		);
	}

	return (
		<div className='container mx-auto py-8 px-4'>
			<h1 className='text-4xl font-extrabold mb-8 text-center tracking-tight'>
				Global News Portal
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
				<Input
					placeholder='Search by title...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='w-full'
				/>

				<Select value={selectedTopic} onValueChange={setSelectedTopic}>
					<SelectTrigger>
						<SelectValue placeholder='All Topics' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All Topics</SelectItem>
						{config?.topics.map((t: any) => (
							<SelectItem key={t._id} value={t.name}>
								{t.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Select value={selectedSource} onValueChange={setSelectedSource}>
					<SelectTrigger>
						<SelectValue placeholder='All Sources' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All Sources</SelectItem>
						{config?.sources.map((s: any) => (
							<SelectItem key={s._id} value={s.sourceId}>
								{s.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				{/* Sort Order */}
				<Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger>
						<SelectValue placeholder='Sort by Date' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='newest'>Newest First</SelectItem>
						<SelectItem value='oldest'>Oldest First</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* ARTICLE GRID */}
			{filteredArticles.length > 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filteredArticles.map((article: Article, idx: number) => (
						<NewsCard key={idx} article={article} />
					))}
				</div>
			) : (
				<div className='text-center py-20 border rounded-2xl bg-muted/20'>
					<p className='text-xl text-muted-foreground'>No news found for your request.</p>
				</div>
			)}
		</div>
	);
};

export default HomePage;
