interface contentItem {
  subtitulo: string;
  img: string;
  textP: string;
}

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
  model: string;
  contentTop: contentItem;
  contentMiddle: contentItem;
  contentBottom: contentItem;
}
const getBlogs = async () => {
  try {
    const response = await fetch(
      "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs"
    );
    if (!response.ok) {
      throw new Error("Error Fetch users");
    } else {
      const blogs: Blog[] = await response.json();
      const filteredBlogs = blogs.filter((blog) => {
        return (
          blog.contentTop &&
          blog.contentMiddle &&
          blog.contentBottom &&
          blog.contentTop.subtitulo &&
          blog.contentTop.img &&
          blog.contentTop.textP &&
          blog.contentMiddle.subtitulo &&
          blog.contentMiddle.img &&
          blog.contentMiddle.textP &&
          blog.contentBottom.subtitulo &&
          blog.contentBottom.img &&
          blog.contentBottom.textP
        );
      });

      console.log(filteredBlogs);
      return filteredBlogs;
    }
  } catch (error) {
    console.error("error:", error);
  }
};
export default getBlogs;
