chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Handle the message and send a response asynchronously
    sendResponse(true); // Assuming this is where the response is sent

    // Check if the channel is still open before sending the response
    if (chrome.runtime.lastError) {
        console.error("Failed to send response:", chrome.runtime.lastError.message);
        // Handle the error gracefully, e.g., by logging it or notifying the user
    }
});
