interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userID: string;
}

const getBlogs = async () => {
  try {
    const response = await fetch(
      "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/13"
    );
    if (!response.ok) {
      throw new Error("Error Fetch users");
    } else {
      const blogs: Blog[] = await response.json();
      return blogs;
    }
  } catch (error) {
    console.error("error:", error);
  }
};
export default getBlogs;
