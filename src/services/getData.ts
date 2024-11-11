const getData = () => {
  const storedUserData = localStorage.getItem("loginUser");
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    return userData;
  } else {
    return false;
  }
};

export default getData;
