import Deso from "deso-protocol";
import { Button } from 'react-bootstrap';
import { useState } from "react";
const deso = new Deso();
function App() {
  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [postResponse, setPostResponse] = useState();
  return (
    <div>
      <Button
        onClick={async () => {
          const user = await deso.identity.login();
          console.log(user);
          setLoginResponse(JSON.stringify(user, null, 2));
        }}
      >
        login
      </Button>
      <Button
        onClick={() => {
          deso.identity.logout(deso.identity.getUserKey());
        }}
      >
        logout
      </Button>
      <Button
        onClick={async () => {
          const user = await deso.user.getSingleProfile({
            PublicKeyBase58Check: deso.identity.getUserKey(),
          });
          console.log(user);
          setSampleResponse(JSON.stringify(user, null, 2));
        }}
      >
        get user
      </Button>
      <Button
        onClick={async () => {
          const postResponse = await deso.posts.submitPost({
            UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
            BodyObj: {
              Body: "Hi @DeZoDog, I'm checking out the deso-react app",
              VideoURLs: [],
              ImageURLs: [],
            },
          });
          setPostResponse(JSON.stringify(postResponse, null, 2));
        }}
      >
        submit post
      </Button>
      <div>
        Login info
        <pre>{loginResponse}</pre>
      </div>
      <div>
        User info
        <pre>{sampleResponse}</pre>
      </div>
      setPostResponse
      <div>
        User info
        <pre>{postResponse}</pre>
      </div>
    </div>
  );
}

export default App;
