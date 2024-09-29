// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageCapture {
    // Struct to represent an image metadata
    struct Image {
        address uploader;
        string imageHash; // Hash of the image (IPFS hash or other type)
        string imageURI;  // IPFS URI or link to the image
        uint256 timestamp; // When it was uploaded
    }

    // State variable to store image uploads
    mapping(address => Image[]) public uploadedImages;
    
    // Event that is emitted when a new image is uploaded
    event ImageUploaded(
        address indexed uploader,
        string imageHash,
        string imageURI,
        uint256 timestamp
    );

    // Function to upload an image (IPFS hash and URI)
    function uploadImage(string memory _imageHash, string memory _imageURI) public {
        require(bytes(_imageHash).length > 0, "Image hash is required");
        require(bytes(_imageURI).length > 0, "Image URI is required");

        // Add the image to the uploader's history
        uploadedImages[msg.sender].push(
            Image({
                uploader: msg.sender,
                imageHash: _imageHash,
                imageURI: _imageURI,
                timestamp: block.timestamp
            })
        );

        // Emit an event for the image upload
        emit ImageUploaded(msg.sender, _imageHash, _imageURI, block.timestamp);
    }

    // Function to retrieve images uploaded by a specific user
    function getImagesByUploader(address _uploader) public view returns (Image[] memory) {
        return uploadedImages[_uploader];
    }
}
