import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, totalCount };
}

// options: UseQueryOptions
export function useUsers(page: number) {
  // ["users", page], segundo item do array é um dado que se mudar, a chamada tem q ser refeita, no caso o parametro page
  return useQuery(["users", page], () => getUsers(page), {
    // durante 5 segundos, essa chamada não precisa ser recarregada
    // durante 5 segundos fica no estado "fresh" (fresco)
    // se sair da tela e voltar nesses 5 segundos, ele não faz outra requisição pois os dados estão "frescos"
    staleTime: 1000 * 60 * 5, // 5 segundos
    // ...options, caso use server side rendering
  });
}
