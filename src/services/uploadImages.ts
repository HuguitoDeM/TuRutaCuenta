interface props {
  imagen: File | null;
}

const uploadImages = async ({ imagen }: props) => {
  const data = new FormData();
  data.append("image", imagen!);
  try {
    const uploadToServer = await fetch(
      "https://api.imgbb.com/1/upload?key=1d1151c11ac1e556179ec4ba095794a7",
      {
        method: "POST",
        body: data,
      }
    );
    const responseData = await uploadToServer.json();
    return responseData.data.url;
  } catch (error) {
    console.error("error: ", error);
  }
};

export default uploadImages;
