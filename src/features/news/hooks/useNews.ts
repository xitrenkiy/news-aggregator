import { useQuery } from '@tanstack/react-query';
import newsApi from '@/api/newsApi';
import { useConfig } from '@/hooks/useConfig';
import { classifyArticle } from '../utils/classifyArticle';

import type { Article } from '@/types/news';

export const useNews = () => {
	const { data: config } = useConfig();

	return useQuery({
		queryKey: ['news', config?.sources],
		queryFn: async () => {
			const sourceIds = config?.sources.map((s) => s.sourceId).join(',');

			const response = await newsApi.get('/everything', {
				params: { sources: sourceIds },
			});

			return response.data.articles.map((article: Article) => ({
				...article,
				topic: classifyArticle(article.title, config?.topics || []),
			}));
		},

		enabled: !!config?.sources && config.sources.length > 0,
	});
};
