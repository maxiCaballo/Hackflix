import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";

function ModalTrailer(props) {
  const movievideos = props.movievideos;
  const [videoKey, setVideoKey] = useState(null);
  useEffect(() => {
    const { key } =
      movievideos.find(
        (movie) =>
          movie.type === "Trailer" && movie.official && movie.site === "YouTube"
      ) || "";

    setVideoKey(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ backgroundColor: "#000" }} className="border-dark">
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#9c9c9c" }}
          className="w-100 text-center text-decoration-underline"
        >
          Trailer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#000" }}>
        <div className="centered">
          {videoKey ? (
            <YouTube
              videoId={videoKey}
              containerClassName="w-100"
              className="w-100"
            />
          ) : (
            <p className="fs-2 text-center">
              Sorry we could not find an official trailer
            </p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#000" }} className="border-dark">
        <Button onClick={props.onHide} className="btn btn-danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalTrailer;
