function decode(input) {
  //Throw error if input is not an array of numbers
  if (
    !Array.isArray(input) ||
    !input.every((value) => typeof value === "number")
  ) {
    throw new Error("Invalid input");
  }

  function decodeChunk(chunk) {
    //Parse decimal value to 32 bits
    const encodedChunk = chunk.toString(2).padStart(32, "0");

    //Split into 4 bytes
    const chunkArray = encodedChunk.match(/.{1,8}/g);

    //Rearrange bits according to provided pattern
    let decodedChunk = [];
    for (let k = 0; k < chunkArray.length; k++) {
      for (let i = 0; i < chunkArray.length; i++) {
        for (let j = 0; j < 5; j += 4) {
          decodedChunk.push(chunkArray[i][j + k]);
        }
      }
    }

    //Split into 4 bytes and reverse
    const decodedByteArray = decodedChunk
      .join("")
      .match(/.{1,8}/g)
      .reverse();

    //Convert Bytes into character values after removing null values
    const charactersArray = decodedByteArray
      .filter((value) => parseInt(value, 2) !== 0)
      .map((value) => String.fromCharCode(parseInt(value, 2)));

    return charactersArray.join("");
  }

  const chunks = input.map((value) => decodeChunk(value));
  const decodedString = chunks.join("");

  return decodedString;
}

export default decode;
