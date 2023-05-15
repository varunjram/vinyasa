import {useEffect, useState} from "react";

export default function NotFound() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <h1
        style={{
          color: "red",
          opacity: showDiv ? 1 : 0,
          transition: showDiv ? "opacity 2s ease-in-out" : "none",
        }}>
        404: Page Not Found
      </h1>
      <div style={{height: "100%"}}>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/media/bbcfd1a1fecd97c1835792283a601f10.gif"
          width="60%"
          alt="404 not found"
        />
      </div>
    </>
  );
}
