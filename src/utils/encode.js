function encode(input) {
  //Throw error on bad inputs
  if (typeof input !== "string" || input.length === 0) {
    throw new Error("Invalid input");
  }

  //Break input up into chunks of 4 characters
  const chunksArray = input.match(/.{1,4}/g);

  function encodeChunk(chunk) {
    //Split string into array, reverse, and get character code in binary
    const byteString = chunk
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"));

    //Zero-pad to a length of 4 bytes
    const zeroFilled = byteString.join("").padStart(32, "0");

    //Split into array of 4 bytes
    const byteArray = zeroFilled.match(/.{1,8}/g);

    //Rearrange bits according to pattern provided in challenge
    let encodedArray = [];
    for (let j = 0; j < 8; j++) {
      for (let i = 0; i < byteArray.length; i++) {
        encodedArray.push(byteArray[i][j]);
      }
    }

    //Return decimal value of encoded value
    const decimalValue = parseInt(encodedArray.join(""), 2);
    return decimalValue;
  }

  return chunksArray.map((chunk) => encodeChunk(chunk));
}

export default encode;
