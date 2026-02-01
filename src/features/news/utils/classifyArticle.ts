import type { SanityTopic } from '@/types/sanity';

export const classifyArticle = (title: string, topics: SanityTopic[]): string => {
	const lowerTitle = title.toLowerCase();

	const foundTopic = topics.find((topic) =>
		topic.keywords.some((keyword) => lowerTitle.includes(keyword.toLowerCase())),
	);

	return foundTopic ? foundTopic.name : 'General';
};
