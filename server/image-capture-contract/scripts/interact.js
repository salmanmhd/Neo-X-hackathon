async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address
  const ImageCapture = await ethers.getContractFactory('ImageCapture');
  const imageCapture = await ImageCapture.attach(contractAddress);

  // Uploading an image (you should replace this with an actual IPFS hash and URI)
  const imageHash = 'QmExampleHash';
  const imageURI = 'https://ipfs.io/ipfs/QmExampleHash';

  console.log('Uploading image...');
  const tx = await imageCapture.uploadImage(imageHash, imageURI);
  await tx.wait();
  console.log('Image uploaded successfully!');

  // Retrieve the uploaded image data
  const images = await imageCapture.getImagesByUploader(deployer.address);
  console.log('Uploaded images by deployer:', images);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
