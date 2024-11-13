import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import getBlogs from "../services/getBlogs";

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
}

interface BlogContextType {
  blogData: Blog[] | undefined;
  loading: boolean;
  error: string | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("Error: useBlog must be used within a BlogProvider");
  }
  return context;
};

interface BlogsProviderProps {
  children: ReactNode;
}
export const BlogProvider = ({ children }: BlogsProviderProps) => {
  const [blogData, setBlogData] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const resultado: Blog[] | undefined = await getBlogs();
        setBlogData(resultado);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogData, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
