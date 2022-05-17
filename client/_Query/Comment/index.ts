import { submitComment } from "API/Comment";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetCommnetList = (id: number) => {
	return useQuery(["Comments", id])
}

export const useSubmitComment = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return useMutation(submitComment, {
		onSuccess: (data, variables) => {
			console.log(data);
			console.log(variables);
			console.log(queryClient.getQueryData(["Post", variables.id]))
			onSuccess();
		},
	});
};
