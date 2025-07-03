import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

interface TodoContextType {
    todos: string[];
    addTodo: (todo: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {}
});

export function TodoProvider ({children}: {children: React.ReactNode}) {
    const [todos, setTodos] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const todosJSON = await AsyncStorage.getItem('todos');
                if (todosJSON) {
                    setTodos(JSON.parse(todosJSON));
                }
            } catch (err) {
                setError("Failed to load todos");
                console.error("Error loading todos:", err);
            }
        }

        loadTodos();
    }, []);

    const addTodo = async (todo: string) => {
        if (!todo) return;
        try {
            setTodos([...todos, todo]);
            await AsyncStorage.setItem('todos', JSON.stringify([...todos, todo]));
        } catch (err) {
            setError("Failed to add todo");
            console.error("Error adding todo:", err);
        }
    }

    return(
        <TodoContext.Provider value={{todos, addTodo}}>
            {children}
            {error && <p style={sytles.error}>{error}</p>}
        </TodoContext.Provider>
    )
}

export function useTodo(): TodoContextType {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}

const sytles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 16,
        marginTop: 10
    }
})
