import { getPosts } from "@/api/post";
import { queryKeys } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetInfinitPosts() {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getPosts(pageParam),
    queryKey: [queryKeys.GET_POSTS, queryKeys.POST],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPages.length + 1 : undefined;
    },
  });
}

export default useGetInfinitPosts;
