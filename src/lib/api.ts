const NEXT_PUBLIC_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export interface Todo {
  id: string;
  title: string;
  completed: string;
  clerkUserId: string;
  createdAt: string;
  updatedAt: string;
}

// Generic function to send GraphQL requests
const fetchGraphQL = async (query: string, variables?: Record<string, any>) => {
  try {
    const response = await fetch(NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    
    const { data, errors } = await response.json();
    if (errors) throw new Error(errors[0].message);
    return data;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
};

// Fetch todos by clerkUserId
export const getTodos = async (clerkUserId: string): Promise<Todo[]> => {
  const query = `#graphql
    query GetTodos($clerkUserId: ID!) {
      todos(clerkUserId: $clerkUserId) {
        id
        title
        completed
        clerkUserId
        createdAt
        updatedAt
      }
    }
  `;
  return fetchGraphQL(query, { clerkUserId }).then((res) => res.todos);
};

// Fetch a single todo
export const getTodo = async (todoId: string): Promise<Todo> => {
  const query = `#graphql
    query GetTodo($todoId: ID!) {
      todo(todoId: $todoId) {
        id
        title
        completed
        clerkUserId
      }
    }
  `;
  return fetchGraphQL(query, { todoId }).then((res) => res.todo);
};

// Create a new todo
export const createTodo = async (title: string, completed: string, clerkUserId: string): Promise<Todo> => {
  const mutation = `#graphql
    mutation CreateTodo($title: String!, $completed: String, $clerkUserId: String!) {
      createTodo(title: $title, completed: $completed, clerkUserId: $clerkUserId) {
        id
        title
        completed
        clerkUserId
      }
    }
  `;
  return fetchGraphQL(mutation, { title, completed, clerkUserId }).then((res) => res.createTodo);
};

// Update an existing todo
export const updateTodo = async (todoId: string, title?: string, completed?: "Completed" | "In Progress" | "Pending"): Promise<boolean> => {
  const mutation = `#graphql
    mutation UpdateTodo($todoId: String!, $title: String, $completed: String) {
      updateTodo(todoId: $todoId, title: $title, completed: $completed)
    }
  `;
  return fetchGraphQL(mutation, { todoId, title, completed }).then((res) => res.updateTodo);
};

// Delete a todo
export const deleteTodo = async (todoId: string): Promise<boolean> => {
  const mutation = `#graphql
    mutation DeleteTodo($todoId: String!) {
      deleteTodo(todoId: $todoId)
    }
  `;
  return fetchGraphQL(mutation, { todoId }).then((res) => res.deleteTodo);
};
