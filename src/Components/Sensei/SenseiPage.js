import axios from "axios";
import React, { useState } from "react";

function SenseiPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const functionSensei = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBgWKeWlrs5bcdiXPDvZXy36NW2JJqMV7s",
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const generatedText = result.data.candidates[0].content.parts[0].text;
      setResponse(generatedText);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-md-4 my-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center display-1 fw-light">
              Make sure you are clear
            </h1>
            <h3 className="text-center fw-normal">
              with <span className="text-primary fw-bold">Sensei</span>
            </h3>

            <div className="text-center my-md-5 my-2">
              <div className="px-md-3">
                <form onSubmit={functionSensei}>
                  <div className="input-group mb-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control shadow-sm border-2 border-primary rounded-start-pill"
                        id="userInputPrompt"
                        placeholder="Enter prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        required
                      />
                      <label htmlFor="userInputPrompt" className="text-muted">
                        Enter prompt
                      </label>
                    </div>
                    <button
                      className="btn btn-primary rounded-end-pill"
                      type="submit"
                      disabled={loading || !prompt}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        <i className="bi bi-send"> Send</i>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4">
                  {response && (
                    <div className="alert alert-primary">
                      <h4>Sensei:</h4>
                      <p>{response}</p>
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger">
                      <h4 className="placeholder"></h4>
                      <p>{error}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SenseiPage;
