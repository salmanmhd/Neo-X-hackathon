// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account:', deployer.address);

  const ImageCapture = await ethers.getContractFactory('ImageCapture');
  const imageCapture = await ImageCapture.deploy();

  console.log('Contract deployed to address:', imageCapture.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
