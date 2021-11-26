import { useEffect, useState } from "react";

const CreateMeme = () => {
  const [template_id, updateTemplate_id] = useState("");
  const [username, updateUsername] = useState("");
  const [password, updatepassword] = useState("");
  const [text0, settext0] = useState([]);
  const [text1,settext1]=useState([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `https://api.imgflip.com/get_memes?template_id=${template_id}&username=${username}&password=${password}&text0=${text0}&text1=${text1}`
    );
    const json = await res.json();

  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          template_id
          <input
            id="location"
            value={template_id}
            placeholder="Location"
            onChange={(e) => updateTemplate_id(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          username
          <input
            id="location"
            value={username}
            placeholder="Location"
            onChange={(e) => updateUsername(e.target.value)}
          />
        </label>
        <label htmlFor="breed">
          password
          <input
            id="location"
            value={password}
            placeholder="Location"
            onChange={(e) => updatepassword(e.target.value)}
          />
        </label>
        <label htmlFor="breed">
          text0
          <input
            id="location"
            value={text0}
            placeholder="Location"
            onChange={(e) => settext0(e.target.value)}
          />
        </label> 
        <label htmlFor="breed">
          text1
          <input
            id="location"
            value={text1}
            placeholder="Location"
            onChange={(e) => settext1(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      
    </div>
  );
};

export default CreateMeme;