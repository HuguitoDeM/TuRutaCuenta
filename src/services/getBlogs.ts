interface ContentItem {
  subtitulo: string;
  img: string;
  textP: string;
}

interface ContentItemTopModelTwo {
  img: string;
  img1: string;
  img2: string;
}

interface ContentItemMiddleModelTwo {
  subtitulo: string;
  textP: string;
  textP2: string;
  textP3: string;
  textP4: string;
}

interface Blog {
  id: string;
  title: string;
  img?: string;
  description?: string;
  userId: string;
  model: string;
  contentTop: ContentItem | ContentItemTopModelTwo;
  contentMiddle: ContentItem | ContentItemMiddleModelTwo;
  contentBottom?: ContentItem;
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
        if (!blog.contentTop || !blog.contentMiddle) {
          return false;
        }
        const isModelOne =
          (blog.contentTop as ContentItem).subtitulo !== undefined &&
          (blog.contentTop as ContentItem).img !== undefined &&
          (blog.contentTop as ContentItem).textP !== undefined &&
          (blog.contentMiddle as ContentItem).subtitulo !== undefined &&
          (blog.contentMiddle as ContentItem).img !== undefined &&
          (blog.contentMiddle as ContentItem).textP !== undefined;

        const isModelTwo =
          (blog.contentTop as ContentItemTopModelTwo).img !== undefined &&
          (blog.contentTop as ContentItemTopModelTwo).img1 !== undefined &&
          (blog.contentTop as ContentItemTopModelTwo).img2 !== undefined &&
          (blog.contentMiddle as ContentItemMiddleModelTwo).subtitulo !==
            undefined &&
          (blog.contentMiddle as ContentItemMiddleModelTwo).textP !==
            undefined &&
          (blog.contentMiddle as ContentItemMiddleModelTwo).textP2 !==
            undefined &&
          (blog.contentMiddle as ContentItemMiddleModelTwo).textP3 !==
            undefined &&
          (blog.contentMiddle as ContentItemMiddleModelTwo).textP4 !==
            undefined;

        return isModelOne || isModelTwo;
      });

      console.log(filteredBlogs);
      return filteredBlogs;
    }
  } catch (error) {
    console.error("error:", error);
  }
};
export default getBlogs;
