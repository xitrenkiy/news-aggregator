import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanity';
import type { AppConfig } from '@/types/sanity';

export const useConfig = () => {
	return useQuery<AppConfig>({
		queryKey: ['config'],
		queryFn: async () => {
			const data = await sanityClient.fetch(`
        {
          "sources": *[_type == "allowedSource"],
          "topics": *[_type == "topic"]
        }
      `);
			return data;
		},
		staleTime: 1000 * 60 * 10,
	});
};
